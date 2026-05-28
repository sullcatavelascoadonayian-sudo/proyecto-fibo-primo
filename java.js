// ================= CONTROLADOR DE ENRUTAMIENTO DE PÁGINAS VIRTUALES =================
function navegarA(idPagina) {
    const paginas = document.getElementsByClassName("página");
    for (let i = 0; i < paginas.length; i++) {
        paginas[i].classList.remove("active");
    }

    const botones = document.getElementsByClassName("nav-btn");
    for (let i = 0; i < botones.length; i++) {
        botones[i].classList.remove("active");
    }

    document.getElementById("page-" + idPagina).classList.add("active");

    for (let i = 0; i < botones.length; i++) {
        if (botones[i].getAttribute("onclick").includes(idPagina)) {
            botones[i].classList.add("active");
        }
    }
}

// ================= FUNCIÓN BASE: DETECTOR DE NÚMEROS PRIMOS =================
function esPrimo(numero) {
    if (numero <= 1) return false;
    let contador = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contador++;
        }
    }
    return contador === 2;
}

// ================= PÁGINA 1: LOGICA PURA DE FIBONACCI (AHORRO) =================
function calcularSoloFibonacci() {
    const meses = parseInt(document.getElementById("mesesAhorro").value);
    const contenedor = document.getElementById("resAhorro");

    if (isNaN(meses) || meses <= 0) {
        contenedor.innerHTML = "<p style='color:red;'>Por favor introduce un parámetro mensual válido.</p>";
        return;
    }

    let a = 0;
    let b = 1;

    let tabla = `
        <div class="table-wrapper">
            <table class="res-table">
                <thead>
                    <tr>
                        <th>Periodo Temporal</th>
                        <th>Depósito Progresivo (Crecimiento Fibonacci)</th>
                    </tr>
                </thead>
                <tbody>
    `;

    for (let i = 1; i <= meses; i++) {
        let ahorroDelMes = b;

        let c = a + b;
        a = b;
        b = c;

        tabla += `
            <tr>
                <td>Mes de Operación ${i}</td>
                <td style="color: var(--neon-cyan); font-weight: bold;">Bs. ${ahorroDelMes}</td>
            </tr>
        `;
    }

    tabla += "</tbody></table></div>";
    contenedor.innerHTML = tabla;
}

// ================= PÁGINA 2: LOGICA PURA DE NÚMEROS PRIMOS (LOGÍSTICA) =================
function calcularSoloPrimos() {
    const codigo = parseInt(document.getElementById("codigoSeguridad").value);
    const contenedor = document.getElementById("resSeguridad");

    if (isNaN(codigo) || codigo <= 0) {
        contenedor.innerHTML = "<p style='color:red;'>Introduzca un intervalo de semanas correcto.</p>";
        return;
    }

    const resultadoValidacion = esPrimo(codigo);
    
    if (resultadoValidacion) {
        contenedor.innerHTML = `
            <div style="border-left: 4px solid var(--neon-green); padding-left: 10px;">
                <h4 style="color: var(--neon-green); margin-bottom:5px;">INFORME LOGÍSTICO: INTERVALO ÓPTIMO ASÍNCRONO</h4>
                <p>El ciclo de <strong>${codigo} semanas</strong> es un Número Primo. Al no tener divisores intermedios, este intervalo reduce drásticamente la probabilidad de coincidir de forma repetitiva con los mantenimientos de otras flotas, garantizando un flujo de trabajo balanceado en los talleres.</p>
            </div>
        `;
    } else {
        contenedor.innerHTML = `
            <div style="border-left: 4px solid var(--neon-purple); padding-left: 10px;">
                <h4 style="color: var(--neon-purple); margin-bottom:5px;">INFORME LOGÍSTICO: RIESGO DE SATURACIÓN CORRIENTE</h4>
                <p>El ciclo de <strong>${codigo} semanas</strong> es un número compuesto (no es primo). Debido a que comparte múltiples divisores comunes, este intervalo provocará cuellos de botella cíclicos, haciendo que coincida constantemente con los días de servicio de otros vehículos de la empresa.</p>
            </div>
        `;
    }
}

// ================= PÁGINA 3: LÓGICA COMBINADA (ECOSISTEMAS) =================
function calcularCombinado() {
    const terminos = parseInt(document.getElementById("terminosCombinados").value);
    const contenedor = document.getElementById("resCombinado");

    if (isNaN(terminos) || terminos <= 0) {
        contenedor.innerHTML = "<p style='color:red;'>Introduzca un ciclo generacional válido.</p>";
        return;
    }

    let a = 0;
    let b = 1;

    let tabla = `
        <div class="table-wrapper">
            <table class="res-table">
                <thead>
                    <tr>
                        <th>Fase Generacional</th>
                        <th>Densidad de la Población (Fibonacci)</th>
                        <th>Estado de Control de Riesgo (Filtro de Primalidad)</th>
                    </tr>
                </thead>
                <tbody>
    `;

    for (let i = 1; i <= terminos; i++) {
        let valorFibonacci = b;

        const chequeoPrimo = esPrimo(valorFibonacci);
        const celdaResultado = chequeoPrimo 
            ? "<span class='is-prime-tag'>⚠️ Alerta: Punto Crítico de Inestabilidad (Población es Prima)</span>" 
            : "<span class='not-prime-tag'>Estado Normal (Crecimiento Estable)</span>";

        let c = a + b;
        a = b;
        b = c;

        tabla += `
            <tr>
                <td>Etapa de Simulación ${i}</td>
                <td>${valorFibonacci} Organismos Activos</td>
                <td>${celdaResultado}</td>
            </tr>
        `;
    }

    tabla += "</tbody></table></div>";
    contenedor.innerHTML = tabla;
}