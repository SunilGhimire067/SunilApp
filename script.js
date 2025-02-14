function showTrends() {
    let trends = [
        "📌 GitOps - Using Git as a deployment source",
        "🤖 AI in DevOps - Automating workflows",
        "🔐 DevSecOps - Integrating security in CI/CD",
        "💰 FinOps - Optimizing cloud costs",
        "🚀 Kubernetes & Serverless - Future of DevOps"
    ];

    let list = document.getElementById("trend-list");
    list.innerHTML = "";  
    trends.forEach(trend => {
        let li = document.createElement("li");
        li.textContent = trend;
        list.appendChild(li);
    });
}
