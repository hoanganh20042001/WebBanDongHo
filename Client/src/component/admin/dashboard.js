import Chart from 'react-apexcharts'
import axios from 'axios';
import React from 'react';
import "../../css/adminMember.css";
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'
import { Grid, Text, Image, Container, Table, Group, Button, Title } from '@mantine/core';
const ApexRadiarChart = () => {
    const donutColors = {
        series1: '#ffe700',
        series2: '#00d4bd',
        series3: '#826bf8',
        series4: '#2b9bf4',
        series5: '#FFA1A1'
    }
    const options = {
        legend: {
            show: true,
            position: 'bottom'
        },
        labels: ['Sản phẩm A', 'Sản phẩm B', 'Sản phẩm C', 'Sản phẩm D'],

        colors: [donutColors.series1, donutColors.series5, donutColors.series3, donutColors.series2],
        dataLabels: {
            enabled: true,
            formatter(val, opt) {
                return `${parseInt(val)} sp`
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        name: {
                            fontSize: '2rem',
                            fontFamily: 'Montserrat'
                        },
                        value: {
                            fontSize: '1rem',
                            fontFamily: 'Montserrat',
                            formatter(val) {
                                return `${parseInt(val)} sản phẩm`
                            }
                        },
                        total: {
                            show: true,
                            fontSize: '1.5rem',
                            label: 'Sản phẩm A',
                            formatter(w) {
                                return '31 sản phẩm'
                            }
                        }
                    }
                }
            }
        },
        responsive: [
            {
                breakpoint: 992,
                options: {
                    chart: {
                        height: 380
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            },
            {
                breakpoint: 576,
                options: {
                    chart: {
                        height: 320
                    },
                    plotOptions: {
                        pie: {
                            donut: {
                                labels: {
                                    show: true,
                                    name: {
                                        fontSize: '1.5rem'
                                    },
                                    value: {
                                        fontSize: '1rem'
                                    },
                                    total: {
                                        fontSize: '1.5rem'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ]
    }

    const series = [85, 16, 50, 50]

    return (
        <Card>
            <CardHeader>
                <div>
                    <CardTitle className='mb-75' tag='h4'>
                        Doanh số sản phẩm
                    </CardTitle>
                    <CardSubtitle className='text-muted'>Các sản phẩm trending hệ thống</CardSubtitle>
                </div>
            </CardHeader>
            <CardBody>
                <>
                    <Chart options={options} series={series} type='donut' height={350} />
                </>
            </CardBody>
        </Card>
    )
}
//     return (
//         <Container className="detail-section-container" style={{ backgroundColor: "white" }}>
//             <Grid style={{}}>
//                 <Grid.Col className="">
//                     <Group position="center" style={{ paddingBottom: "2%", margin: "2% 5%", borderBottom: "1px solid #000" }}>
//                         <Title order={1} >Quản lý khách hàng </Title>
//                     </Group>
//                 </Grid.Col>
//                 <Grid.Col>
//                     <Chart options={options} series={series} type='donut' height={350} />
//                 </Grid.Col>
//             </Grid>
//         </Container>
//     )
// }
export default ApexRadiarChart
