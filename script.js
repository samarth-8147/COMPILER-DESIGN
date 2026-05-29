// LEXER FUNCTION
function runLexer() {
    let code = document.getElementById("code").value;
    let words = code.split(/\s+/);
    let output = "";

    let keywords = ["int", "while", "return", "begin", "end"];
    let symbols = [];

    words.forEach(word => {
        if (keywords.includes(word)) {
            output += word + "  :  KEYWORD\n";
        } else if (!isNaN(word)) {
            output += word + "  :  NUMBER\n";
        } else if (/^[=+\/>]+$/.test(word)) {
            output += word + "  :  OPERATOR\n";
        } else if (word.length > 0) {
            output += word + "  :  IDENTIFIER\n";
            if (!symbols.includes(word)) {
                symbols.push(word);
            }
        }
    });

    output += "\nSymbol Table:\n";
    symbols.forEach(s => output += s + "\n");

    document.getElementById("output").innerText = output;
}


// PARSER FUNCTION
function runParser() {
    let code = document.getElementById("code").value;
    let output = "";

    if (!code.includes("int main()")) {
        output += "❌ Missing main function\n";
    }
    if (!code.includes("begin") || !code.includes("end")) {
        output += "❌ Missing begin/end\n";
    }
    if (!code.includes("while")) {
        output += "❌ Missing while loop\n";
    }
    if (!code.includes("return")) {
        output += "❌ Missing return\n";
    }

    if (output === "") {
        output = "✅ Valid Program";
    }

    document.getElementById("output").innerText = output;
}


// COPY OUTPUT
function copyOutput() {
    let text = document.getElementById("output").innerText;
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
}


// DOWNLOAD PDF (FINAL FIXED)
function downloadPDF() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    let code = document.getElementById("code").value;
    let output = document.getElementById("output").innerText;

    let pageWidth = doc.internal.pageSize.getWidth();
    let pageHeight = doc.internal.pageSize.getHeight();

    let y = 8;

    let img = new Image();
    img.src = "logo.png";

    img.onload = function () {

        // LOGO BOX
        doc.rect(65, y, 80, 20);
        doc.addImage(img, "PNG", 75, y + 2, 60, 15);

        y += 25;

        // COLLEGE NAME
        doc.setFont("Helvetica", "bold");
        doc.setFontSize(12);
        doc.text("NMAM Institute of Technology, Nitte", pageWidth / 2, y, { align: "center" });

        y += 6;

            // DETAILS
        let today = new Date().toLocaleDateString();
        doc.setFontSize(8);
        doc.text("Name: Samarth Venkappa Patil , Rishab Raj K , Sachin ", 10, y);
        doc.text("Date: " + today, pageWidth - 40, y);

        y += 5;
        doc.text("Department: Computer Science Engineering", 10, y);

        y += 6;

        // LINE
        doc.line(10, y, pageWidth - 10, y);

        y += 6;
// TITLE
        doc.setFontSize(10);
        doc.text("Design and Implementation of a Simple Compiler", pageWidth / 2, y, { align: "center" });

        y += 6;
    

        // INPUT
        doc.setFont("Courier");
        doc.setFontSize(8);
        doc.text("Input Program:", 10, y);
        y += 4;

        code.split("\n").forEach(line => {
            doc.text(line, 10, y);
            y += 4;
        });

        y += 4;

        // OUTPUT
        doc.text("Output:", 10, y);
        y += 4;

        output.split("\n").forEach(line => {
            doc.text(line, 10, y);
            y += 4;
        });

        // ✍️ FIXED SIGNATURE POSITION (BOTTOM RIGHT)
        // ✍️ CLEAN GUIDE SIGNATURE (PROPER ALIGNMENT)

let sigX = pageWidth - 70;   // move slightly left (important)
let sigY = pageHeight - 35;  // fixed bottom position

doc.setFont("Helvetica", "bold");
doc.setFontSize(10);
doc.text("Guide Signature", sigX, sigY);

sigY += 6;

doc.setFont("Helvetica", "normal");

// line
doc.text("_________________________", sigX, sigY);

sigY += 6;

// name
doc.text("Dr. Raju K", sigX, sigY);

sigY += 5;

// designation
doc.text("Professor / System Administrator", sigX, sigY);

sigY += 5;

// department
doc.text("Dept. of Computer Science and Engineering", sigX, sigY);

sigY += 5;

// college
doc.text("NMAM Institute of Technology, Nitte.", sigX, sigY);
        // PAGE NUMBER
        doc.setFontSize(8);
        doc.text("Page 1", pageWidth / 2, pageHeight - 5, { align: "center" });

        doc.save("Compiler_Project_Report.pdf");
    };
}

// CLEAR
function clearOutput() {
    document.getElementById("output").innerText = "";
    document.getElementById("code").value = "";
}