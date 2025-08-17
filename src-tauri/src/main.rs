// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager, Window, WindowEvent};
use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::path::PathBuf;
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
struct FileInfo {
    name: String,
    path: String,
    size: u64,
    extension: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct ScanResult {
    id: String,
    file_info: FileInfo,
    status: String, // "clean", "threat", "suspicious"
    threats: Vec<String>,
    scan_time: String,
    hash: String,
}

#[derive(Debug, Serialize, Deserialize)]
struct ScanSession {
    id: String,
    files: Vec<ScanResult>,
    scan_type: String,
    start_time: String,
    end_time: Option<String>,
    total_files: usize,
    threats_found: usize,
    suspicious_files: usize,
    clean_files: usize,
}

// Tauri commands
#[tauri::command]
async fn scan_files(files: Vec<String>) -> Result<Vec<ScanResult>, String> {
    // Simulate file scanning process
    let mut results = Vec::new();
    
    for file_path in files {
        let path = PathBuf::from(&file_path);
        
        // Get file info
        let file_info = match get_file_info(&path) {
            Ok(info) => info,
            Err(e) => return Err(format!("Failed to get file info: {}", e)),
        };
        
        // Simulate scanning
        tokio::time::sleep(tokio::time::Duration::from_millis(500)).await;
        
        // Generate mock scan result
        let scan_result = generate_mock_scan_result(file_info);
        results.push(scan_result);
    }
    
    Ok(results)
}

#[tauri::command]
async fn get_file_hash(file_path: String) -> Result<String, String> {
    // Simulate hash generation
    let hash = format!("sha256:{}", Uuid::new_v4().to_string().replace("-", ""));
    Ok(hash)
}

#[tauri::command]
async fn save_scan_results(session: ScanSession) -> Result<String, String> {
    // In a real application, this would save to a database or file
    // For now, we'll just return a success message
    Ok(format!("Scan results saved with ID: {}", session.id))
}

#[tauri::command]
async fn get_system_info() -> Result<HashMap<String, String>, String> {
    let mut info = HashMap::new();
    
    info.insert("os".to_string(), std::env::consts::OS.to_string());
    info.insert("arch".to_string(), std::env::consts::ARCH.to_string());
    info.insert("family".to_string(), std::env::consts::FAMILY.to_string());
    
    Ok(info)
}

#[tauri::command]
async fn show_notification(title: String, body: String) -> Result<(), String> {
    // This would integrate with system notifications
    println!("Notification: {} - {}", title, body);
    Ok(())
}

// Helper functions
fn get_file_info(path: &PathBuf) -> Result<FileInfo, std::io::Error> {
    let metadata = std::fs::metadata(path)?;
    let name = path.file_name()
        .and_then(|n| n.to_str())
        .unwrap_or("Unknown")
        .to_string();
    
    let extension = path.extension()
        .and_then(|ext| ext.to_str())
        .unwrap_or("")
        .to_string();
    
    Ok(FileInfo {
        name,
        path: path.to_string_lossy().to_string(),
        size: metadata.len(),
        extension,
    })
}

fn generate_mock_scan_result(file_info: FileInfo) -> ScanResult {
    use std::time::{SystemTime, UNIX_EPOCH};
    
    // Simulate threat detection (20% chance of threat, 10% suspicious)
    let rand_val: f32 = (SystemTime::now().duration_since(UNIX_EPOCH).unwrap().as_nanos() % 100) as f32 / 100.0;
    
    let (status, threats) = if rand_val < 0.2 {
        ("threat".to_string(), vec!["Trojan.Generic.KD".to_string(), "PUP.Optional.Bundle".to_string()])
    } else if rand_val < 0.3 {
        ("suspicious".to_string(), vec!["Potentially Unwanted Program".to_string()])
    } else {
        ("clean".to_string(), vec![])
    };
    
    ScanResult {
        id: Uuid::new_v4().to_string(),
        file_info,
        status,
        threats,
        scan_time: chrono::Utc::now().format("%Y-%m-%d %H:%M:%S UTC").to_string(),
        hash: format!("sha256:{}", Uuid::new_v4().to_string().replace("-", "")),
    }
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_notification::init())
        .plugin(tauri_plugin_shell::init())
        .plugin(tauri_plugin_window::init())
        .invoke_handler(tauri::generate_handler![
            scan_files,
            get_file_hash,
            save_scan_results,
            get_system_info,
            show_notification
        ])
        .on_window_event(|window, event| {
            match event {
                WindowEvent::CloseRequested { api, .. } => {
                    // Handle window close
                    let window = window.clone();
                    api.prevent_close();
                    
                    // You can add confirmation dialog here
                    window.close().unwrap();
                }
                _ => {}
            }
        })
        .setup(|app| {
            // Setup code that runs when the app starts
            let window = app.get_webview_window("main").unwrap();
            
            // Set window properties
            window.set_title("Varenizer - Advanced File Security & Malware Detection").unwrap();
            
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}