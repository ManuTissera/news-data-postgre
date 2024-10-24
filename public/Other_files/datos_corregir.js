
// let objeto_objeto = [
// ('02/08/2024','Índice de precios del sector manufacturero ISM','MPI-(ISM)'),
// ('02/08/2024','Ingresos medios por hora (interanual) (Anual)','AvgEarning','**','https://es.investing.com/economic-calendar/average-hourly-earnings-1777'),
// ('02/08/2024','Ingresos medios por hora (Mensual)','AvgEar(M)','***','https://es.investing.com/economic-calendar/average-hourly-earnings-8'),
// ('02/08/2024','Nóminas no agrícolas','NoFarmPay','***','https://es.investing.com/economic-calendar/nonfarm-payrolls-227'),
// ('02/08/2024','Tasa de participación laboral','LabForPart','**','https://es.investing.com/economic-calendar/participation-rate-1581'),
// ('02/08/2024','Nóminas privadas no agrícolas','NonFarmPriv','**','https://es.investing.com/economic-calendar/private-nonfarm-payrolls-528'),
// ('02/08/2024','Tasa de desempleo','UnempRate','***','https://es.investing.com/economic-calendar/unemployment-rate-300'),
// ('05/08/2024','PMI compuesto de S&P Global','PMI-SyP','**','https://es.investing.com/economic-calendar/s-p-global-composite-pmi-1492'),
// ('05/08/2024','PMI de servicios','PMI-Service','***','https://es.investing.com/economic-calendar/services-pmi-1062'),
// ('05/08/2024','Índice ISM de precios del sector no manufacturero','NMPI-(ISM)','**','https://es.investing.com/economic-calendar/ism-non-manufacturing-employment-1048'),
// ('07/08/2024','Inventarios de petróleo crudo de la AIE','Inv-Crud-IEA','***','https://es.investing.com/economic-calendar/eia-crude-oil-inventories-75'),
// ('08/08/2024','Renovaciones de los subsidios por desempleo','US-Un_Ben_Rene','**','https://es.investing.com/economic-calendar/continuing-jobless-claims-522'),
// ('08/08/2024','Nuevas peticiones de subsidio por desempleo','NewJobClaims','***','https://es.investing.com/economic-calendar/initial-jobless-claims-294'),
// ('13/08/2024','IPP subyacente (Mensual)','PPI-Sub','**','https://es.investing.com/economic-calendar/core-ppi-62'),
// ('13/08/2024','IPP (Mensual)','PPI','***','https://es.investing.com/economic-calendar/ppi-238'),
// ('14/08/2024','IPC subyacente (Anual)','CPI-Sub-YoY','**','https://es.investing.com/economic-calendar/core-cpi-736'),
// ('14/08/2024','IPC subyacente (Mensual)','CPI-Sub-MoM','***','https://es.investing.com/economic-calendar/core-cpi-56'),
// ('14/08/2024','IPC (Mensual)','CPI-MoM','***','https://es.investing.com/economic-calendar/cpi-69'),
// ('14/08/2024','IPC (Anual)','CPI-YoY','***','https://es.investing.com/economic-calendar/cpi-733'),
// ('14/08/2024','Inventarios de petróleo crudo de la AIE','Inv-Crud-IEA'),
// ('15/08/2024','Renovaciones de los subsidios por desempleo','US-Un_Ben_Rene'),
// ('15/08/2024','Ventas minoristas subyacentes (Mensual)','Sales-R-MoM','***','https://es.investing.com/economic-calendar/core-retail-sales-63'),
// ('15/08/2024','Índice de precios de exportación (Mensual)"','IPREM','**','https://es.investing.com/economic-calendar/export-price-index-892'),
// ('15/08/2024','Índice de Precios de Importación (Mensual)','IPRIM','**','https://es.investing.com/economic-calendar/import-price-index-153'),
// ('15/08/2024','Nuevas peticiones de subsidio por desempleo','NewJobClaims'),
// ('15/08/2024','Índice manufacturero de la Fed de Filadelfia','Phila-FIM','***','https://es.investing.com/economic-calendar/philadelphia-fed-manufacturing-index-236'),
// ('15/08/2024','Previsiones de ventas de la industria minorista (Mensual)','RIForectast','**','https://es.investing.com/economic-calendar/retail-control-1506'),
// ('15/08/2024','Ventas minoristas (Mensual)','Ret-Sales','***','https://es.investing.com/economic-calendar/retail-sales-256'),
// ('15/08/2024','Índice de producción industrial (Mensual)','IPI','**','https://es.investing.com/economic-calendar/industrial-production-161'),
// ('21/08/2024','Inventarios de petróleo crudo de la AIE','Inv-Crud-IEA'),
// ('22/08/2024','Renovaciones de los subsidios por desempleo','US-Un_Ben_Rene'),
// ('22/08/2024','Nuevas peticiones de subsidio por desempleo','NewJobClaims'),
// ('22/08/2024','PMI manufacturero','PMI-Manfact','***','https://es.investing.com/economic-calendar/manufacturing-pmi-829'),
// ('22/08/2024','PMI compuesto de S&P Global','PMI-SyP','**','https://es.investing.com/economic-calendar/s-p-global-composite-pmi-1492'),
// ('22/08/2024','PMI de servicios','PMI-Service'),
// ('22/08/2024','Ventas de viviendas de segunda mano (Mensual)','Ex-HoSa-MoM','**','https://es.investing.com/economic-calendar/existing-home-sales-891'),
// ('22/08/2024','Ventas de viviendas de segunda mano','Ex-HoSa','***','https://es.investing.com/economic-calendar/existing-home-sales-99'),
// ('23/08/2024','Ventas de viviendas nuevas','New-Ho_Sa','***','https://es.investing.com/economic-calendar/new-home-sales-222'),
// ('23/08/2024','Ventas de viviendas nuevas (Mensual)','New-HoSa-MoM','**','https://es.investing.com/economic-calendar/new-home-sales-896'),
// ('26/08/2024','Pedidos de bienes duraderos (subyacente) (Mensual)','DGO(S)-MoM','**','https://es.investing.com/economic-calendar/core-durable-goods-orders-59'),
// ('26/08/2024','Pedidos de bienes duraderos (Mensual)','DGO-MoM','**','https://es.investing.com/economic-calendar/durable-goods-orders-86'),
// ('27/08/2024','Confianza del consumidor de The Conference Board','Conf-Board','***','https://es.investing.com/economic-calendar/cb-consumer-confidence-48'),
// ('28/08/2024','Inventarios de petróleo crudo de la AIE','Inv-Crud-IEA'),
// ('29/08/2024','PIB (Trimestral) (2T)','GDP','***','https://es.investing.com/economic-calendar/gdp-375'),
// ('29/08/2024','Indice de precios de bienes y servicios incluidos en el PIB (Trimestral) (2T)','PIG-GDP','**','https://es.investing.com/economic-calendar/gdp-price-index-343'),
// ('30/08/2024','Precios del gasto en consumo personal subyacente (Anual)','PCE-YoY','***','https://es.investing.com/economic-calendar/core-pce-price-index-905'),
// ('30/08/2024','Precios del gasto en consumo personal subyacente (Mensual)','PCE-MoM','***','https://es.investing.com/economic-calendar/core-pce-price-index-61'),
// ('30/08/2024','Índice de precios PCE (Anual)','PCE-Anual','**','https://es.investing.com/economic-calendar/pce-price-index-906'),
// ('30/08/2024','Índice de Precios del Gasto en Consumo Personal (PCE) (Mensual)','PCE-Per','**','https://es.investing.com/economic-calendar/pce-price-index-904'),
// ('30/08/2024','Gasto personal (Mensual)','Per-Spend','**','https://es.investing.com/economic-calendar/personal-spending-235'),
// ('03/09/2024','PMI manufacturero','PMI-Manfact'),
// ('03/09/2024','PMI manufacturero del ISM','PMI_man_ISM','***','https://es.investing.com/economic-calendar/ism-manufacturing-pmi-173'),
// ('05/09/2024','Cambio del empleo no agrícola ADP','Ch_e_Na_ADP','***','https://es.investing.com/economic-calendar/adp-nonfarm-employment-change-1'),
// ('05/09/2024','Renovaciones de los subsidios por desempleo','US-Un_Ben_Rene'),
// ('05/09/2024','Nuevas peticiones de subsidio por desempleo','NewJobClaims'),
// ('05/09/2024','PMI compuesto de S&P Global','PMI-SyP','**','https://es.investing.com/economic-calendar/s-p-global-composite-pmi-1492'),
// ('05/09/2024','PMI de servicios','PMI-Service'),
// ('05/09/2024','Índice ISM de empleo en el sector no manufacturero','NMENM-(ISM)','**','https://es.investing.com/economic-calendar/ism-non-manufacturing-employment-1048'),
// ('05/09/2024','PMI no manufacturero del ISM','PMI_no_man_ISM','***','https://es.investing.com/economic-calendar/ism-non-manufacturing-pmi-176'),
// ('05/09/2024','Índice ISM de precios del sector no manufacturero','NMPI-(ISM)','**','https://es.investing.com/economic-calendar/ism-non-manufacturing-prices-1049'),
// ('05/09/2024','Inventarios de petróleo crudo de la AIE','Inv-Crud-IEA'),
// ('06/09/2024','Ingresos medios por hora (interanual) (Anual)','AvgEarning'),
// ('06/09/2024','Nóminas no agrícolas','NoFarmPay','***','https://es.investing.com/economic-calendar/nonfarm-payrolls-227'),
// ('06/09/2024','Tasa de participación laboral','LabForPart','**','https://es.investing.com/economic-calendar/participation-rate-1581'),
// ('06/09/2024','Nóminas privadas no agrícolas','NonFarmPriv','**','https://es.investing.com/economic-calendar/private-nonfarm-payrolls-528'),
// ('06/09/2024','Tasa de desempleo','UnempRate','***','https://es.investing.com/economic-calendar/unemployment-rate-300'),
// ('11/09/2024','IPC subyacente (Mensual)','CPI-Sub-MoM'),
// ('11/09/2024','IPC subyacente (Anual)','CPI-Sub-YoY'),
// ('11/09/2024','IPC (Anual)','CPI-YoY'),
// ('11/09/2024','IPC (Mensual)','CPI-MoM'),
// ('12/09/2024','IPP subyacente (Mensual)','PPI-Sub'),
// ('12/09/2024','IPP (Mensual)','PPI'),
// ('13/09/2024','Índice de precios de exportación (Mensual)','0'),
// ('13/09/2024','Índice de Precios de Importación (Mensual)','IPRIM'),
// ('23/09/2024','PMI compuesto de S&P Global','PMI-SyP','**','https://es.investing.com/economic-calendar/s-p-global-composite-pmi-1492')
// ]

let objeto_noticias = [
    ['02/08/2024','Índice de precios del sector manufacturero ISM','MPI-(ISM)'],
    ['02/08/2024','Ingresos medios por hora (interanual) (Anual)','AvgEarning','**','https://es.investing.com/economic-calendar/average-hourly-earnings-1777'],
    ['02/08/2024','Ingresos medios por hora (Mensual)','AvgEar(M)','***','https://es.investing.com/economic-calendar/average-hourly-earnings-8'],
    ['02/08/2024','Nóminas no agrícolas','NoFarmPay','***','https://es.investing.com/economic-calendar/nonfarm-payrolls-227'],
    ['02/08/2024','Tasa de participación laboral','LabForPart','**','https://es.investing.com/economic-calendar/participation-rate-1581'],
    ['02/08/2024','Nóminas privadas no agrícolas','NonFarmPriv','**','https://es.investing.com/economic-calendar/private-nonfarm-payrolls-528'],
    ['02/08/2024','Tasa de desempleo','UnempRate','***','https://es.investing.com/economic-calendar/unemployment-rate-300'],
    ['05/08/2024','PMI compuesto de S&P Global','PMI-SyP','**','https://es.investing.com/economic-calendar/s-p-global-composite-pmi-1492'],
    ['05/08/2024','PMI de servicios','PMI-Service','***','https://es.investing.com/economic-calendar/services-pmi-1062'],
    ['05/08/2024','Índice ISM de precios del sector no manufacturero','NMPI-(ISM)','**','https://es.investing.com/economic-calendar/ism-non-manufacturing-employment-1048'],
    ['07/08/2024','Inventarios de petróleo crudo de la AIE','Inv-Crud-IEA','***','https://es.investing.com/economic-calendar/eia-crude-oil-inventories-75'],
    ['08/08/2024','Renovaciones de los subsidios por desempleo','US-Un_Ben_Rene','**','https://es.investing.com/economic-calendar/continuing-jobless-claims-522'],
    ['08/08/2024','Nuevas peticiones de subsidio por desempleo','NewJobClaims','***','https://es.investing.com/economic-calendar/initial-jobless-claims-294'],
    ['13/08/2024','IPP subyacente (Mensual)','PPI-Sub','**','https://es.investing.com/economic-calendar/core-ppi-62'],
    ['13/08/2024','IPP (Mensual)','PPI','***','https://es.investing.com/economic-calendar/ppi-238'],
    ['14/08/2024','IPC subyacente (Anual)','CPI-Sub-YoY','**','https://es.investing.com/economic-calendar/core-cpi-736'],
    ['14/08/2024','IPC subyacente (Mensual)','CPI-Sub-MoM','***','https://es.investing.com/economic-calendar/core-cpi-56'],
    ['14/08/2024','IPC (Mensual)','CPI-MoM','***','https://es.investing.com/economic-calendar/cpi-69'],
    ['14/08/2024','IPC (Anual)','CPI-YoY','***','https://es.investing.com/economic-calendar/cpi-733'],
    ['14/08/2024','Inventarios de petróleo crudo de la AIE','Inv-Crud-IEA'],
    ['15/08/2024','Renovaciones de los subsidios por desempleo','US-Un_Ben_Rene'],
    ['15/08/2024','Ventas minoristas subyacentes (Mensual)','Sales-R-MoM','***','https://es.investing.com/economic-calendar/core-retail-sales-63'],
    ['15/08/2024','Índice de precios de exportación (Mensual)"','IPREM','**','https://es.investing.com/economic-calendar/export-price-index-892'],
    ['15/08/2024','Índice de Precios de Importación (Mensual)','IPRIM','**','https://es.investing.com/economic-calendar/import-price-index-153'],
    ['15/08/2024','Nuevas peticiones de subsidio por desempleo','NewJobClaims'],
    ['15/08/2024','Índice manufacturero de la Fed de Filadelfia','Phila-FIM','***','https://es.investing.com/economic-calendar/philadelphia-fed-manufacturing-index-236'],
    ['15/08/2024','Previsiones de ventas de la industria minorista (Mensual)','RIForectast','**','https://es.investing.com/economic-calendar/retail-control-1506'],
    ['15/08/2024','Ventas minoristas (Mensual)','Ret-Sales','***','https://es.investing.com/economic-calendar/retail-sales-256'],
    ['15/08/2024','Índice de producción industrial (Mensual)','IPI','**','https://es.investing.com/economic-calendar/industrial-production-161'],
    ['21/08/2024','Inventarios de petróleo crudo de la AIE','Inv-Crud-IEA'],
    ['22/08/2024','Renovaciones de los subsidios por desempleo','US-Un_Ben_Rene'],
    ['22/08/2024','Nuevas peticiones de subsidio por desempleo','NewJobClaims'],
    ['22/08/2024','PMI manufacturero','PMI-Manfact','***','https://es.investing.com/economic-calendar/manufacturing-pmi-829'],
    ['22/08/2024','PMI compuesto de S&P Global','PMI-SyP','**','https://es.investing.com/economic-calendar/s-p-global-composite-pmi-1492'],
    ['22/08/2024','PMI de servicios','PMI-Service'],
    ['22/08/2024','Ventas de viviendas de segunda mano (Mensual)','Ex-HoSa-MoM','**','https://es.investing.com/economic-calendar/existing-home-sales-891'],
    ['22/08/2024','Ventas de viviendas de segunda mano','Ex-HoSa','***','https://es.investing.com/economic-calendar/existing-home-sales-99'],
    ['23/08/2024','Ventas de viviendas nuevas','New-Ho_Sa','***','https://es.investing.com/economic-calendar/new-home-sales-222'],
    ['23/08/2024','Ventas de viviendas nuevas (Mensual)','New-HoSa-MoM','**','https://es.investing.com/economic-calendar/new-home-sales-896'],
    ['26/08/2024','Pedidos de bienes duraderos (subyacente) (Mensual)','DGO(S)-MoM','**','https://es.investing.com/economic-calendar/core-durable-goods-orders-59'],
    ['26/08/2024','Pedidos de bienes duraderos (Mensual)','DGO-MoM','**','https://es.investing.com/economic-calendar/durable-goods-orders-86'],
    ['27/08/2024','Confianza del consumidor de The Conference Board','Conf-Board','***','https://es.investing.com/economic-calendar/cb-consumer-confidence-48'],
    ['28/08/2024','Inventarios de petróleo crudo de la AIE','Inv-Crud-IEA'],
    ['29/08/2024','PIB (Trimestral) (2T)','GDP','***','https://es.investing.com/economic-calendar/gdp-375'],
    ['29/08/2024','Indice de precios de bienes y servicios incluidos en el PIB (Trimestral) (2T)','PIG-GDP','**','https://es.investing.com/economic-calendar/gdp-price-index-343'],
    ['30/08/2024','Precios del gasto en consumo personal subyacente (Anual)','PCE-YoY','***','https://es.investing.com/economic-calendar/core-pce-price-index-905'],
    ['30/08/2024','Precios del gasto en consumo personal subyacente (Mensual)','PCE-MoM','***','https://es.investing.com/economic-calendar/core-pce-price-index-61'],
    ['30/08/2024','Índice de precios PCE (Anual)','PCE-Anual','**','https://es.investing.com/economic-calendar/pce-price-index-906'],
    ['30/08/2024','Índice de Precios del Gasto en Consumo Personal (PCE) (Mensual)','PCE-Per','**','https://es.investing.com/economic-calendar/pce-price-index-904'],
    ['30/08/2024','Gasto personal (Mensual)','Per-Spend','**','https://es.investing.com/economic-calendar/personal-spending-235'],
    ['03/09/2024','PMI manufacturero','PMI-Manfact'],
    ['03/09/2024','PMI manufacturero del ISM','PMI_man_ISM','***','https://es.investing.com/economic-calendar/ism-manufacturing-pmi-173'],
    ['05/09/2024','Cambio del empleo no agrícola ADP','Ch_e_Na_ADP','***','https://es.investing.com/economic-calendar/adp-nonfarm-employment-change-1'],
    ['05/09/2024','Renovaciones de los subsidios por desempleo','US-Un_Ben_Rene'],
    ['05/09/2024','Nuevas peticiones de subsidio por desempleo','NewJobClaims'],
    ['05/09/2024','PMI compuesto de S&P Global','PMI-SyP','**','https://es.investing.com/economic-calendar/s-p-global-composite-pmi-1492'],
    ['05/09/2024','PMI de servicios','PMI-Service'],
    ['05/09/2024','Índice ISM de empleo en el sector no manufacturero','NMENM-(ISM)','**','https://es.investing.com/economic-calendar/ism-non-manufacturing-employment-1048'],
    ['05/09/2024','PMI no manufacturero del ISM','PMI_no_man_ISM','***','https://es.investing.com/economic-calendar/ism-non-manufacturing-pmi-176'],
    ['05/09/2024','Índice ISM de precios del sector no manufacturero','NMPI-(ISM)','**','https://es.investing.com/economic-calendar/ism-non-manufacturing-prices-1049'],
    ['05/09/2024','Inventarios de petróleo crudo de la AIE','Inv-Crud-IEA'],
    ['06/09/2024','Ingresos medios por hora (interanual) (Anual)','AvgEarning'],
    ['06/09/2024','Nóminas no agrícolas','NoFarmPay','***','https://es.investing.com/economic-calendar/nonfarm-payrolls-227'],
    ['06/09/2024','Tasa de participación laboral','LabForPart','**','https://es.investing.com/economic-calendar/participation-rate-1581'],
    ['06/09/2024','Nóminas privadas no agrícolas','NonFarmPriv','**','https://es.investing.com/economic-calendar/private-nonfarm-payrolls-528'],
    ['06/09/2024','Tasa de desempleo','UnempRate','***','https://es.investing.com/economic-calendar/unemployment-rate-300'],
    ['11/09/2024','IPC subyacente (Mensual)','CPI-Sub-MoM'],
    ['11/09/2024','IPC subyacente (Anual)','CPI-Sub-YoY'],
    ['11/09/2024','IPC (Anual)','CPI-YoY'],
    ['11/09/2024','IPC (Mensual)','CPI-MoM'],
    ['12/09/2024','IPP subyacente (Mensual)','PPI-Sub'],
    ['12/09/2024','IPP (Mensual)','PPI'],
    ['13/09/2024','Índice de precios de exportación (Mensual)','0'],
    ['13/09/2024','Índice de Precios de Importación (Mensual)','IPRIM'],
    ['23/09/2024','PMI compuesto de S&P Global','PMI-SyP','**','https://es.investing.com/economic-calendar/s-p-global-composite-pmi-1492'],
    ]
    


// let noticiasItems = [

// INSERT INTO `news_name` (new_name,new_ac,new_value,new_site) 
// VALUE

// ('05/09/2024',('Cambio del empleo no agrícola ADP','Ch_e_Na_ADP','***','https://es.investing.com/economic-calendar/adp-nonfarm-employment-change-1'),
// ('27/08/2024',('Confianza del consumidor de The Conference Board','Conf-Board','***','https://es.investing.com/economic-calendar/cb-consumer-confidence-48'),
// ('30/08/2024',('Gasto personal (Mensual)','Per-Spend','**','https://es.investing.com/economic-calendar/personal-spending-235'),
// ('29/08/2024',('Indice de precios de bienes y servicios incluidos en el PIB (Trimestral) (2T)','PIG-GDP','**','https://es.investing.com/economic-calendar/gdp-price-index-343'),
// ('15/08/2024',('Índice de precios de exportación (Mensual)"','IPREM','**','https://es.investing.com/economic-calendar/export-price-index-892'),
// ('15/08/2024',('Índice de Precios de Importación (Mensual)','IPRIM','**','https://es.investing.com/economic-calendar/import-price-index-153'),
// ('30/08/2024',('Índice de Precios del Gasto en Consumo Personal (PCE) (Mensual)','PCE-Per','**','https://es.investing.com/economic-calendar/pce-price-index-904'),
// ('30/08/2024',('Índice de precios PCE (Anual)','PCE-Anual','**','https://es.investing.com/economic-calendar/pce-price-index-906'),
// ('15/08/2024',('Índice de producción industrial (Mensual)','IPI','**','https://es.investing.com/economic-calendar/industrial-production-161'),
// ('05/09/2024',('Índice ISM de empleo en el sector no manufacturero','NMENM-(ISM)','**','https://es.investing.com/economic-calendar/ism-non-manufacturing-employment-1048'),
// ('05/09/2024',('Índice ISM de precios del sector no manufacturero','NMPI-(ISM)','**','https://es.investing.com/economic-calendar/ism-non-manufacturing-prices-1049'),
// ('15/08/2024',('Índice manufacturero de la Fed de Filadelfia','Phila-FIM','***','https://es.investing.com/economic-calendar/philadelphia-fed-manufacturing-index-236'),
// ('02/08/2024',('Ingresos medios por hora (interanual) (Anual)','AvgEarning','**','https://es.investing.com/economic-calendar/average-hourly-earnings-1777'),
// ('02/08/2024',('Ingresos medios por hora (Mensual)','AvgEar(M)','***','https://es.investing.com/economic-calendar/average-hourly-earnings-8'),
// ('07/08/2024',('Inventarios de petróleo crudo de la AIE','Inv-Crud-IEA','***','https://es.investing.com/economic-calendar/eia-crude-oil-inventories-75'),
// ('14/08/2024',('IPC (Anual)','CPI-YoY','***','https://es.investing.com/economic-calendar/cpi-733'),
// ('14/08/2024',('IPC (Mensual)','CPI-MoM','***','https://es.investing.com/economic-calendar/cpi-69'),
// ('14/08/2024',('IPC subyacente (Anual)','CPI-Sub-YoY','**','https://es.investing.com/economic-calendar/core-cpi-736'),
// ('14/08/2024',('IPC subyacente (Mensual)','CPI-Sub-MoM','***','https://es.investing.com/economic-calendar/core-cpi-56'),
// ('13/08/2024',('IPP (Mensual)','PPI','***','https://es.investing.com/economic-calendar/ppi-238'),
// ('13/08/2024',('IPP subyacente (Mensual)','PPI-Sub','**','https://es.investing.com/economic-calendar/core-ppi-62'),
// ('02/08/2024',('Nóminas no agrícolas','NoFarmPay','***','https://es.investing.com/economic-calendar/nonfarm-payrolls-227'),
// ('02/08/2024',('Nóminas privadas no agrícolas','NonFarmPriv','**','https://es.investing.com/economic-calendar/private-nonfarm-payrolls-528'),
// ('08/08/2024',('Nuevas peticiones de subsidio por desempleo','NewJobClaims','***','https://es.investing.com/economic-calendar/initial-jobless-claims-294'),
// ('26/08/2024',('Pedidos de bienes duraderos (Mensual)','DGO-MoM','**','https://es.investing.com/economic-calendar/durable-goods-orders-86'),
// ('26/08/2024',('Pedidos de bienes duraderos (subyacente) (Mensual)','DGO(S)-MoM','**','https://es.investing.com/economic-calendar/core-durable-goods-orders-59'),
// ('29/08/2024',('PIB (Trimestral) (2T)','GDP','***','https://es.investing.com/economic-calendar/gdp-375'),
// ('05/08/2024',('PMI compuesto de S&P Global','PMI-SyP','**','https://es.investing.com/economic-calendar/s-p-global-composite-pmi-1492'),
// ('05/08/2024',('PMI de servicios','PMI-Service','***','https://es.investing.com/economic-calendar/services-pmi-1062'),
// ('22/08/2024',('PMI manufacturero','PMI-Manfact','***','https://es.investing.com/economic-calendar/manufacturing-pmi-829'),
// ('03/09/2024',('PMI manufacturero del ISM','PMI_man_ISM','***','https://es.investing.com/economic-calendar/ism-manufacturing-pmi-173'),
// ('05/09/2024',('PMI no manufacturero del ISM','PMI_no_man_ISM','***','https://es.investing.com/economic-calendar/ism-non-manufacturing-pmi-176'),
// ('30/08/2024',('Precios del gasto en consumo personal subyacente (Anual)','PCE-YoY','***','https://es.investing.com/economic-calendar/core-pce-price-index-905'),
// ('30/08/2024',('Precios del gasto en consumo personal subyacente (Mensual)','PCE-MoM','***','https://es.investing.com/economic-calendar/core-pce-price-index-61'),
// ('15/08/2024',('Previsiones de ventas de la industria minorista (Mensual)','RIForectast','**','https://es.investing.com/economic-calendar/retail-control-1506'),
// ('08/08/2024',('Renovaciones de los subsidios por desempleo','US-Un_Ben_Rene','**','https://es.investing.com/economic-calendar/continuing-jobless-claims-522'),
// ('02/08/2024',('Tasa de desempleo','UnempRate','***','https://es.investing.com/economic-calendar/unemployment-rate-300'),
// ('02/08/2024',('Tasa de participación laboral','LabForPart','**','https://es.investing.com/economic-calendar/participation-rate-1581'),
// ('22/08/2024',('Ventas de viviendas de segunda mano','Ex-HoSa','***','https://es.investing.com/economic-calendar/existing-home-sales-99'),
// ('22/08/2024',('Ventas de viviendas de segunda mano (Mensual)','Ex-HoSa-MoM','**','https://es.investing.com/economic-calendar/existing-home-sales-891'),
// ('23/08/2024',('Ventas de viviendas nuevas','New-Ho_Sa','***','https://es.investing.com/economic-calendar/new-home-sales-222'),
// ('23/08/2024',('Ventas de viviendas nuevas (Mensual)','New-HoSa-MoM','**','https://es.investing.com/economic-calendar/new-home-sales-896'),
// ('15/08/2024',('Ventas minoristas (Mensual)','Ret-Sales','***','https://es.investing.com/economic-calendar/retail-sales-256'),
// ('15/08/2024',('Ventas minoristas subyacentes (Mensual)','Sales-R-MoM','***','https://es.investing.com/economic-calendar/core-retail-sales-63'),
// ]





arrHojas = ['avgearm','avgearnings','conf_board','cpi_mom','cpi_sub_mom','cpi_sub_yoy','cpi_yoy','dgo_mom','dgo_s_mom','economic_calendar',
'ex_hosa','ex_hosa_mom','gdp','inv_crud_iea','ipi','iprim','iprix','labforpart','mpi_ism','newjobclaims','news_name','new_hosa_mom','new_ho_sa','nmpi_ism',
'nofarmpay','nonfarmpriv','pce_anual','pce_mom','pce_per','pce_yoy','per_spend','phila_fim','pig_gdp','pmi_index','pmi_manfact','pmi_service',
'pmi_syp','ppi','ppi_sub','ret_sales','riforectast','sales_r_mom','unemprate','us_un_ben_rene']

arrHojasBis = ['avgearm',
'avgearnings',
'conf_board',
'cpi_mom',
'cpi_sub_mom',
'cpi_sub_yoy',
'cpi_yoy',
'dgo_mom',
'dgo_s_mom',
'economic_calendar',
'ex_hosa',
'ex_hosa_mom',
'gdp',
'inv_crud_iea',
'ipi',
'iprim',
'iprix',
'labforpart',
'mpi_ism',
'newjobclaims',
'news_name',
'new_hosa_mom',
'new_ho_sa',
'nmpi_ism',
'nofarmpay',
'nonfarmpriv',
'pce_anual',
'pce_mom',
'pce_per',
'pce_yoy',
'per_spend',
'phila_fim',
'pig_gdp',
'pmi_index',
'pmi_manfact',
'pmi_service',
'pmi_syp',
'ppi',
'ppi_sub',
'ret_sales',
'riforectast',
'sales_r_mom',
'undefined',
'unemprate',
'us_un_ben_rene']


names_news = [
'Índice de precios del sector manufacturero ISM',
'Índice de precios de exportación (Mensual)',
'Cambio del empleo no agrícola ADP',
'Confianza del consumidor de The Conference Board',
'Gasto personal (Mensual)',
'Indice de precios de bienes y servicios incluidos en el PIB (Trimestral) (2T)',
'Índice de precios de exportación (Mensual)',
'Índice de Precios de Importación (Mensual)',
'Índice de Precios del Gasto en Consumo Personal (PCE) (Mensual)',
'Índice de precios PCE (Anual)',
'Índice de producción industrial (Mensual)',
'Índice ISM de empleo en el sector no manufacturero',
'Índice ISM de precios del sector no manufacturero',
'Índice manufacturero de la Fed de Filadelfia',
'Ingresos medios por hora (interanual) (Anual)',
'Ingresos medios por hora (Mensual)',
'Inventarios de petróleo crudo de la AIE',
'IPC (Anual)',
'IPC (Mensual)',
'IPC subyacente (Anual)',
'IPC subyacente (Mensual)',
'IPP (Mensual)',
'IPP subyacente (Mensual)',
'Nóminas no agrícolas',
'Nóminas privadas no agrícolas',
'Nuevas peticiones de subsidio por desempleo',
'Pedidos de bienes duraderos (Mensual)',
'Pedidos de bienes duraderos (subyacente) (Mensual)',
'PIB (Trimestral) (2T)',
'PMI compuesto de S&P Global',
'PMI de servicios',
'PMI manufacturero',
'PMI manufacturero del ISM',
'PMI no manufacturero del ISM',
'Precios del gasto en consumo personal subyacente (Anual)',
'Precios del gasto en consumo personal subyacente (Mensual)',
'Previsiones de ventas de la industria minorista (Mensual)',
'Renovaciones de los subsidios por desempleo',
'Tasa de desempleo',
'Tasa de participación laboral',
'Ventas de viviendas de segunda mano',
'Ventas de viviendas de segunda mano (Mensual)',
'Ventas de viviendas nuevas',
'Ventas de viviendas nuevas (Mensual)',
'Ventas minoristas (Mensual)',
'Ventas minoristas subyacentes (Mensual)']


names_news = [
    'Índice de precios del sector manufacturero ISM',
    'Índice de precios de exportación (Mensual)',
    'Cambio del empleo no agrícola ADP',
    'Confianza del consumidor de The Conference Board',
    'Gasto personal (Mensual)',
    'Indice de precios de bienes y servicios incluidos en el PIB (Trimestral) (2T)',
    'Índice de precios de exportación (Mensual)',
    'Índice de Precios de Importación (Mensual)',
    'Índice de Precios del Gasto en Consumo Personal (PCE) (Mensual)',
    'Índice de precios PCE (Anual)',
    'Índice de producción industrial (Mensual)',
    'Índice ISM de empleo en el sector no manufacturero',
    'Índice ISM de precios del sector no manufacturero',
    'Índice manufacturero de la Fed de Filadelfia',
    'Ingresos medios por hora (interanual) (Anual)',
    'Ingresos medios por hora (Mensual)',
    'Inventarios de petróleo crudo de la AIE',
    'IPC (Anual)',
    'IPC (Mensual)',
    'IPC subyacente (Anual)',
    'IPC subyacente (Mensual)',
    'IPP (Mensual)',
    'IPP subyacente (Mensual)',
    'Nóminas no agrícolas',
    'Nóminas privadas no agrícolas',
    'Nuevas peticiones de subsidio por desempleo',
    'Pedidos de bienes duraderos (Mensual)',
    'Pedidos de bienes duraderos (subyacente) (Mensual)',
    'PIB (Trimestral) (2T)',
    'PMI compuesto de S&P Global',
    'PMI de servicios',
    'PMI manufacturero',
    'PMI manufacturero del ISM',
    'PMI no manufacturero del ISM',
    'Precios del gasto en consumo personal subyacente (Anual)',
    'Precios del gasto en consumo personal subyacente (Mensual)',
    'Previsiones de ventas de la industria minorista (Mensual)',
    'Renovaciones de los subsidios por desempleo',
    'Tasa de desempleo',
    'Tasa de participación laboral',
    'Ventas de viviendas de segunda mano',
    'Ventas de viviendas de segunda mano (Mensual)',
    'Ventas de viviendas nuevas',
    'Ventas de viviendas nuevas (Mensual)',
    'Ventas minoristas (Mensual)',
    'Ventas minoristas subyacentes (Mensual)']
    
'MPI-(ISM)',

acronimos = [
'IPRIX',
'Ch_e_Na_ADP',
'Conf-Board',
'Per-Spend',
'PIG-GDP',
'IPREM',
'IPRIM',
'PCE-Per',
'PCE-Anual',
'IPI',
'NMENM-(ISM)',
'NMPI-(ISM)',
'Phila-FIM',
'AvgEarning',
'AvgEar(M)',
'Inv-Crud-IEA',
'CPI-YoY',
'CPI-MoM',
'CPI-Sub-YoY',
'CPI-Sub-MoM',
'PPI',
'PPI-Sub',
'NoFarmPay',
'NonFarmPriv',
'NewJobClaims',
'DGO-MoM',
'DGO(S)-MoM',
'GDP',
'PMI-SyP',
'PMI-Service',
'PMI-Manfact',
'PMI_man_ISM',
'PMI_no_man_ISM',
'PCE-YoY',
'PCE-MoM',
'RIForectast',
'US-Un_Ben_Rene',
'UnempRate',
'LabForPart',
'Ex-HoSa',
'Ex-HoSa-MoM',
'New-Ho_Sa',
'New-HoSa-MoM',
'Ret-Sales',
'Sales-R-MoM']



const objetoNoticiasFn = () =>{

    let arrNombres5 = [];
    let arrNombres3 = [];
    objeto_noticias.forEach(row =>{
        if(row.length == 5){
            arrNombres5.push(row);
        }else{
            arrNombres3.push(row)
        }
    })

    console.log(arrNombres3);
    console.log(arrNombres5);

}

let ocurrencias = {};
let arrIndex = [];

const ocurrenciasFn = () =>{
    objeto_noticias.forEach(row =>{
        ocurrencias[row[1]] = (ocurrencias[row[1]] || 0) + 1;
    });

    console.log(ocurrencias)
    for(let i = 0; i < Object.keys(ocurrencias).length;i++){
        let indexArr = i + 1;
        arrIndex.push([indexArr,Object.keys(ocurrencias)[i]])
    }
    console.log(arrIndex);

}

objetoNoticiasFn();
ocurrenciasFn();












































