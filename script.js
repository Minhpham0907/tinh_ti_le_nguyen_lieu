function NaOH(n) {
    const x = n * 2.0;    // Nước cất
    const y = n * 1.5;    // Dầu dừa (3/2)
    const z = n * 3.5;    // Dầu ăn (7/2)
    return [
        { name: "Nước cất", mass: x.toFixed(2) },
        { name: "Dầu dừa", mass: y.toFixed(2) },
        { name: "Dầu ăn", mass: z.toFixed(2) }
    ];
}

function dau_an(n) {
    const y = n * (3/7);  // Dầu dừa
    const a = n * (2/7);  // NaOH
    const x = n * (4/7);  // Nước cất
    return [
        { name: "Dầu dừa", mass: y.toFixed(2) },
        { name: "NaOH", mass: a.toFixed(2) },
        { name: "Nước cất", mass: x.toFixed(2) }
    ];
}

function dau_dua(n) {
    const z = n * (7/3);  // Dầu ăn
    const a = n * (2/3);  // NaOH
    const x = n * (4/3);  // Nước cất
    return [
        { name: "Dầu ăn", mass: z.toFixed(2) },
        { name: "NaOH", mass: a.toFixed(2) },
        { name: "Nước cất", mass: x.toFixed(2) }
    ];
}

function nuoc_cat(n) {
    const a = n * 0.5;    // NaOH (1/2)
    const y = n * 0.75;   // Dầu dừa (3/4)
    const z = n * 1.75;   // Dầu ăn (7/4)
    return [
        { name: "NaOH", mass: a.toFixed(2) },
        { name: "Dầu dừa", mass: y.toFixed(2) },
        { name: "Dầu ăn", mass: z.toFixed(2) }
    ];
}

function calculate() {
    const selectedMaterial = document.getElementById('material-select').value;
    const massInput = document.getElementById('mass-input').value;
    const resultDiv = document.getElementById('result');
    const n = parseFloat(massInput);
    let neededMaterials = [];

    // Kiểm tra dữ liệu nhập
    if (!selectedMaterial) {
        resultDiv.innerHTML = "<p style='color: red;'>⚠️ Vui lòng chọn nguyên liệu bạn đã có.</p>";
        return;
    }
    if (isNaN(n) || n <= 0) {
        resultDiv.innerHTML = "<p style='color: red;'>⚠️ Vui lòng nhập khối lượng hợp lệ (> 0).</p>";
        return;
    }

    // Thực hiện tính toán tương ứng với hàm C++
    switch (selectedMaterial) {
        case "NaOH":
            neededMaterials = NaOH(n);
            break;
        case "dau an":
            neededMaterials = dau_an(n);
            break;
        case "dau dua":
            neededMaterials = dau_dua(n);
            break;
        case "nuoc cat":
            neededMaterials = nuoc_cat(n);
            break;
        default:
            resultDiv.innerHTML = "<p style='color: red;'>Dữ liệu không hợp lệ!</p>";
            return;
    }

    // Hiển thị kết quả
    let html = "<h3>Chúng ta cần có:</h3>";
    neededMaterials.forEach(item => {
        html += `<p><strong>${item.mass} g</strong> ${item.name}</p>`;
    });

    resultDiv.innerHTML = html;
}