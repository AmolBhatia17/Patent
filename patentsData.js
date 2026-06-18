/**
 * Patents Database
 * 
 * To update video links:
 * You can paste direct Google Drive share links, such as:
 *   https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing
 * 
 * The portal's app.js automatically converts these links to the /preview format
 * so they can be embedded cleanly in the portal's video player.
 */

const patentsData = [
  {
    id: "patent-01",
    title: "Retrofittable CRA-Based Radix-8 Booth Multiplier for Low-Latency Multiply-Accumulate Units in AI/ML Accelerators",
    category: "Hardware & AI",
    status: "Filed",
    filingDate: "January 14, 2026",
    applicationNumber: "US 18/902,415",
    inventors: ["Research Team", "Dr. A. Bhatia"],
    abstract: "A high-performance hardware multiplier design incorporating a retrofittable Carry-Request-Adder (CRA) architecture utilizing Radix-8 Booth encoding. The design significantly reduces critical path latency in Multiply-Accumulate (MAC) units within deep learning accelerators, minimizing dynamic power consumption while maintaining bit-level precision.",
    features: ["Radix-8 Booth Encoding", "CRA Integration", "Low-Latency MAC", "AI/ML Acceleration"],
    videoUrl: "https://drive.google.com/file/d/1KZJhJdFQgCeuMkr2o87Btl9KngdYAJNr/view?usp=drivesdk" // Replace with actual Drive Link
  },
  {
    id: "patent-02",
    title: "Wearable Exoskeleton for Assisting Leg-Like Locomotion in Limbless Reptiles Using Undulation Conversion",
    category: "Robotics & Bio-Engineering",
    status: "Filed",
    filingDate: "February 03, 2026",
    applicationNumber: "US 18/910,204",
    inventors: ["Research Team", "Dr. A. Bhatia"],
    abstract: "A novel bio-mimetic exoskeleton designed for injured or disabled limbless reptiles. By translating undulatory lateral body waves into mechanical leg-like locomotive force, the system restores mobility, adapts dynamically to terrain roughness, and uses low-power micro-actuation to assist walking cycles.",
    features: ["Bio-mimetic Control", "Undulatory Conversion", "Adaptive Gait Generation", "Ultra-lightweight Frame"],
    videoUrl: "https://drive.google.com/file/d/1hHNmRQuniw7_2hXdT3h0RRve1qfa5j_i/view?usp=sharing" // Replace with actual Drive Link
  },
  {
    id: "patent-03",
    title: "Autonomous Underwater Vehicle System for Acoustic Target Localization, Payload Delivery, and Environmental Mapping",
    category: "Marine Engineering & Robotics",
    status: "Filed",
    filingDate: "March 11, 2026",
    applicationNumber: "US 18/922,810",
    inventors: ["Research Team", "Dr. A. Bhatia"],
    abstract: "An integrated autonomous underwater vehicle (AUV) system featuring multi-element acoustic array tracking. It enables long-range target localization, precise underwater payload delivery mechanisms, and high-resolution bathymetric and environmental mapping under severe signal attenuation.",
    features: ["Acoustic Array Tracking", "Precision Dropper Mechanism", "Bathymetric Mapping", "Sub-surface Autonomy"],
    videoUrl: "https://drive.google.com/file/d/1MTEwzcmQYWi1OGBAWTDMKgIVC-pcd_Jz/view?usp=sharing" // Replace with actual Drive Link
  },
  {
    id: "patent-04",
    title: "Dual-Controller Hybrid Locomotion Rover for Disaster Search & Rescue with Redundant Autonomy and Multi-Sensor Hazard Navigation",
    category: "Robotics & Space Exploration",
    status: "Filed",
    filingDate: "April 08, 2026",
    applicationNumber: "US 18/935,112",
    inventors: ["Research Team", "Dr. A. Bhatia"],
    abstract: "A highly resilient disaster response rover utilizing a hybrid wheel-leg locomotion mechanism. Equipped with dual redundant controller modules and a multi-sensor array (LiDAR, thermal, and depth sensing), it ensures continuous navigation through collapsed structures and dangerous terrains even during controller failure.",
    features: ["Hybrid Wheel-Leg Locomotion", "Redundant Flight/Drive Computers", "SLAM & Hazard Mapping", "Disaster Search & Rescue"],
    videoUrl: "https://drive.google.com/file/d/1LMHC7FQy3_6qPVl2ULehjKxvbbk7ZYMb/view?usp=sharing" // Replace with actual Drive Link
  },
  {
    id: "patent-05",
    title: "Autonomous All-Terrain Cargo Trolley: An RFID-Guided Robotic Caddy with Integrated Rocker-Bogie Suspension System",
    category: "Robotics & Logistics",
    status: "Filed",
    filingDate: "April 29, 2026",
    applicationNumber: "US 18/940,309",
    inventors: ["Research Team", "Dr. A. Bhatia"],
    abstract: "An all-terrain cargo utility robotic caddy incorporating a scaled Rocker-Bogie suspension system for obstacle navigation. Using directional RFID arrays and computerized sensor fusion, it tracks and follows target personnel autonomously, ensuring efficient material transport across uneven, off-road environments.",
    features: ["Rocker-Bogie Suspension", "RFID Follower Array", "All-Terrain Payload Stabilization", "Autonomous Navigation"],
    videoUrl: "https://drive.google.com/file/d/1ep2ZLe6e4vjluJqqoBFFZQAuRLDOZS9N/view?usp=drive_link" // Replace with actual Drive Link
  },
  {
    id: "patent-06",
    title: "Motorcycle Mirror HUD Navigation System: Smartphone-Integrated Transparent Display Retrofit for Turn-by-Turn Guidance",
    category: "Consumer Tech & Smart Mobility",
    status: "Filed",
    filingDate: "May 19, 2026",
    applicationNumber: "US 18/952,188",
    inventors: ["Research Team", "Dr. A. Bhatia"],
    abstract: "A retrofittable Head-Up Display (HUD) integrated into standard motorcycle side-mirrors. The system utilizes a transparent OLED optical assembly driven by a low-power wireless smartphone connection to project high-contrast, non-obtrusive turn-by-turn navigation data directly into the rider's peripheral vision.",
    features: ["Transparent OLED Assembly", "Smart Mirror Retrofit", "Bluetooth HUD Link", "Turn-by-Turn Telemetry"],
    videoUrl: "https://drive.google.com/file/d/1_fG_hIjKlMnOpQrStUvWxYz5678901/view?usp=sharing" // Replace with actual Drive Link
  },
  {
    id: "patent-07",
    title: "Retrofit Smart Charging Cut-off Module with Wireless Control and AI-Based Battery Optimization",
    category: "IoT & Green Tech",
    status: "Filed",
    filingDate: "June 05, 2026",
    applicationNumber: "US 18/960,774",
    inventors: ["Research Team", "Dr. A. Bhatia"],
    abstract: "An intelligent, internet-of-things (IoT) retrofittable inline power cut-off module. Using onboard current sensing and edge AI algorithms, it tracks battery degradation patterns, predicts full charge curves, and terminates power delivery to extend lithium-ion battery lifespans in legacy devices.",
    features: ["Edge Battery Diagnostics", "Smart IoT Cut-off", "Wireless Control App", "Battery Lifecycle Expansion"],
    videoUrl: "https://drive.google.com/file/d/1_gH_iJkLmNoPqRsTuVwXyZ12345678/view?usp=sharing" // Replace with actual Drive Link
  }
];

// Export standard for web imports if needed (or keep global)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = patentsData;
}