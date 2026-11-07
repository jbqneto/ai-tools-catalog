---
name: "FreeMoCap"
summary: "An open-source motion-capture platform that estimates 3D human movement from synchronized video and exports data for analysis or animation."
category: "3D & Interactive"
url: "https://github.com/freemocap/freemocap"
repository: "https://github.com/freemocap/freemocap"
tags: ["Motion capture","Pose estimation","3D animation","Biomechanics","Video"]
resourceType: "Application"
aiInvolvement: "Core AI"
verification: "confirmed"
useCases: ["Capture human motion for research or experimental character-animation workflows","Export tracked movement for compatible 3D or analysis applications","Explore low-cost markerless capture with ordinary cameras"]
capabilities: ["Multi-camera markerless 3D motion capture workflow","Computer-vision pose tracking and motion-data export","Local development workflow with a Python backend and frontend application"]
requirements: ["Camera setup and calibration appropriate for the capture task","Python environment and tracking dependencies; development setup may require uv, Node.js and a supported GPU or CPU configuration"]
limitations: ["Not equivalent to a professional motion-capture stage without validation","Capture quality depends on lighting, calibration, visibility and camera synchronization","The upstream project includes development-stage components and an AGPL-3.0 license"]
---

## Overview

FreeMoCap uses computer-vision/ML pose estimation; **Core AI** here means model-assisted tracking, **not** text-to-video generation. The project is useful for experiments with character motion, but camera calibration, export compatibility and tracking fidelity need to be verified in a practical test. The repository currently documents both quick-start and development instructions; choose the appropriate supported version.

**Official source:** [FreeMoCap](https://github.com/freemocap/freemocap).
