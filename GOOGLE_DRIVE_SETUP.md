# 📁 Google Drive Setup Guide for Project Documents

This guide will help you set up Google Drive links for your project documents so visitors can view your complete project documentation.

## 🚀 Quick Setup Steps

### Step 1: Create Google Drive Folders
1. Go to [Google Drive](https://drive.google.com)
2. Create a folder for each project:
   - `Project 1 - Reverse Engineering of Electric Kettle`
   - `Project 2 - Portable Mini Tool Holder`
   - `Project 3 - Automated Drain Cleaning Robot`

### Step 2: Upload Your Documents
For each project folder, upload relevant documents such as:

#### 📋 Essential Documents
- **Project Proposal/Requirements** - Initial project scope and objectives
- **Technical Drawings** - CAD files, schematics, blueprints
- **Analysis Reports** - Calculations, simulations, test results
- **Final Report** - Complete project documentation
- **Presentation Slides** - Project presentation materials

#### 📸 Visual Materials
- **Project Photos** - Progress photos, final product images
- **Videos** - Working demonstrations, assembly process
- **Screenshots** - Software interfaces, simulation results

#### 💻 Technical Files
- **CAD Files** - SolidWorks, AutoCAD, Fusion 360 files
- **Code Files** - Programming code (if applicable)
- **Data Files** - Test data, analysis spreadsheets
- **Circuit Diagrams** - Electronic schematics (if applicable)

### Step 3: Set Sharing Permissions
1. Right-click on each project folder
2. Select **"Share"**
3. Click **"Change to anyone with the link"**
4. Set permission to **"Viewer"**
5. Click **"Done"**
6. Copy the sharing link

### Step 4: Update Your Portfolio Code
1. Open `script.js` in your portfolio folder
2. Find the `projectDocuments` object (around line 200)
3. Replace the placeholder links with your actual Google Drive links

## 🔧 Code Update Example

**Current code in `script.js`:**
```javascript
const projectDocuments = {
    project1: {
        title: "Reverse Engineering of Electric Kettle",
        driveLink: "YOUR_GOOGLE_DRIVE_LINK_HERE", // ← Replace this
        description: "Complete project documentation, CAD files, analysis reports, and presentation materials."
    },
    project2: {
        title: "Portable Mini Tool Holder",
        driveLink: "YOUR_GOOGLE_DRIVE_LINK_HERE", // ← Replace this
        description: "Design drawings, manufacturing process documentation, and final project report."
    },
    project3: {
        title: "Automated Drain Cleaning Robot",
        driveLink: "YOUR_GOOGLE_DRIVE_LINK_HERE", // ← Replace this
        description: "Technical specifications, circuit diagrams, programming code, and testing documentation."
    }
};
```

**After updating with your links:**
```javascript
const projectDocuments = {
    project1: {
        title: "Reverse Engineering of Electric Kettle",
        driveLink: "https://drive.google.com/drive/folders/1ABC123DEF456GHI789JKL", // Your actual link
        description: "Complete project documentation, CAD files, analysis reports, and presentation materials."
    },
    project2: {
        title: "Portable Mini Tool Holder",
        driveLink: "https://drive.google.com/drive/folders/2XYZ789ABC123DEF456GHI", // Your actual link
        description: "Design drawings, manufacturing process documentation, and final project report."
    },
    project3: {
        title: "Automated Drain Cleaning Robot",
        driveLink: "https://drive.google.com/drive/folders/3MNO456PQR789STU123VWX", // Your actual link
        description: "Technical specifications, circuit diagrams, programming code, and testing documentation."
    }
};
```

## 📁 Recommended Folder Structure

For each project, organize your documents like this:

```
Project Folder/
├── 📄 Project Documents/
│   ├── Project Proposal.pdf
│   ├── Requirements Document.pdf
│   ├── Final Report.pdf
│   └── Presentation Slides.pptx
├── 🎨 Technical Drawings/
│   ├── CAD Files/
│   │   ├── Assembly.sldasm
│   │   ├── Part1.sldprt
│   │   └── Part2.sldprt
│   ├── Schematics.pdf
│   └── Blueprints.pdf
├── 📊 Analysis & Reports/
│   ├── Calculations.xlsx
│   ├── Test Results.pdf
│   ├── Simulation Data/
│   └── Analysis Report.pdf
├── 📸 Visual Materials/
│   ├── Progress Photos/
│   ├── Final Product/
│   ├── Assembly Process/
│   └── Working Demo.mp4
└── 💻 Code & Software/
    ├── Arduino Code/
    ├── Python Scripts/
    └── MATLAB Files/
```

## 🔒 Security Best Practices

1. **Use "Viewer" permissions only** - Don't allow editing
2. **Don't include sensitive information** - Remove personal data, passwords, etc.
3. **Use descriptive file names** - Make it easy for visitors to understand
4. **Keep files organized** - Use folders and clear naming conventions
5. **Regular updates** - Keep documents current and relevant

## 🎯 Tips for Professional Presentation

### File Naming Convention
- Use clear, descriptive names
- Include version numbers if applicable
- Use consistent formatting

**Good examples:**
- `Project_Proposal_v1.0.pdf`
- `CAD_Assembly_Final.sldasm`
- `Test_Results_Phase1.xlsx`
- `Final_Presentation_2024.pptx`

### Document Quality
- Ensure all PDFs are high quality
- Use professional formatting
- Include proper headers and footers
- Add page numbers to reports

### Content Organization
- Start with an overview document
- Include a table of contents for large reports
- Use consistent formatting across documents
- Add brief descriptions to complex files

## 🚨 Troubleshooting

### Link Not Working?
1. Check that the folder is shared with "Anyone with the link can view"
2. Verify the link is copied correctly
3. Test the link in an incognito browser window
4. Make sure the folder contains files (empty folders might not work)

### Files Not Loading?
1. Check file size (very large files might take time)
2. Ensure file formats are web-compatible
3. Verify individual files are also shared if needed

### Permission Issues?
1. Double-check sharing settings
2. Make sure you're using the correct link format
3. Try sharing individual files if folder sharing doesn't work

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your Google Drive links work in a new incognito window
3. Ensure all files are properly uploaded and shared

## ✅ Checklist

- [ ] Created Google Drive folders for each project
- [ ] Uploaded all relevant project documents
- [ ] Set sharing permissions to "Anyone with the link can view"
- [ ] Copied the sharing links
- [ ] Updated the `script.js` file with actual links
- [ ] Tested the links in your portfolio
- [ ] Verified all documents are accessible

Once you complete these steps, your portfolio visitors will be able to click the "View Documents" button on each project and access your complete project documentation through Google Drive!

