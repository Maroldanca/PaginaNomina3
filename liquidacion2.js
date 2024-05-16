function calcularLiquidacion() {
    const fechaIngreso = new Date(document.getElementById('fechaIngreso').value);
    const fechaRetiro = new Date(document.getElementById('fechaRetiro').value);
    const auxilioTransporte = parseFloat(document.getElementById('auxilioTransporte').value) || 0;
    const salario = parseFloat(document.getElementById('salario').value) || 0;
    
    // Calculamos la antigüedad en años
    const antiguedad = (fechaRetiro - fechaIngreso) / (1000 * 60 * 60 * 24 * 365);
    
    // Suponemos que se acumulan 10 días de vacaciones por año de servicio
    const diasPorAño = 10;
    const diasVacaciones = antiguedad * diasPorAño;
  
    // Suponemos que las cesantías equivalen a un mes de salario por cada año trabajado
    const cesantias = salario * antiguedad;
  
    // Calculamos los intereses de las cesantías al 12% anual
    const interesesCesantias = cesantias * 0.12;
  
    // Suponemos que la prima equivale a un salario mensual por cada año trabajado
    const prima = salario * antiguedad;
  
    // Calculamos el total de la liquidación
    const total = salario + (diasVacaciones * (salario / 30)) + cesantias + interesesCesantias + prima + auxilioTransporte;
  
    // Mostramos los resultados
    document.getElementById('resultado').innerHTML = `
      <p>Vacaciones: ${diasVacaciones} días</p>
      <p>Cesantías: $${cesantias.toFixed(2)}</p>
      <p>Intereses de Cesantías: $${interesesCesantias.toFixed(2)}</p>
      <p>Prima: $${prima.toFixed(2)}</p>
      <p>Total de Liquidación: $${total.toFixed(2)}</p>
    `;
  }