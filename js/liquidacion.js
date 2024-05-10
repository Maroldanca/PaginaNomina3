function calcularLiquidacion() {
    const fechaIngreso = new Date(document.getElementById('fechaIngreso').value);
    const fechaRetiro = new Date(document.getElementById('fechaRetiro').value);
    const auxilioTransporte = parseFloat(document.getElementById('auxilioTransporte').value) || 0;
    const salario = parseFloat(document.getElementById('salario').value) || 0;
  
    // Calculamos la diferencia en días entre las fechas de ingreso y retiro
    const diferenciaDias = Math.round((fechaRetiro - fechaIngreso) / (1000 * 60 * 60 * 24));
  

    // Calculamos las cesantías como el salario mensual por los días trabajados
    const cesantias = ((salario+auxilioTransporte) *diferenciaDias )/360;

  
    // Calculamos los intereses de las cesantías al 12% anual
    const interesesCesantias = (cesantias * diferenciaDias * 0.12 )/ 360;
  
    // Calculamos la prima como el salario mensual por los días trabajados
    const prima = (salario / 30) * diferenciaDias;
  
    // Calculamos los días de vacaciones (asumiendo 1.25 días por mes trabajado)
    const diasPorMesVacaciones = 1;
    const diasVacaciones = Math.floor(diferenciaDias / 30) * diasPorMesVacaciones;
  
    // Calculamos el total de la liquidación
    const total = salario + cesantias + interesesCesantias + prima + auxilioTransporte;
  
    // Mostramos los resultados con una precisión de un decimal
    document.getElementById('resultado').innerHTML = `
      <p>Cesantías: $${cesantias.toLocaleString('en')}</p>
      <p>Intereses de Cesantías: $${interesesCesantias.toLocaleString('en')}</p>
      <p>Prima: $${prima.toLocaleString('en')}</p>
      <p>Días de Vacaciones: ${diasVacaciones.toLocaleString('en')}</p>
      <p>Total de Liquidación: $${total.toLocaleString('en')}</p>
    `;

  }
  