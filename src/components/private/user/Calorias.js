import { useEffect, useMemo, useState } from "react";
import React from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

export const Calorias = () => {
    const today = new Date();
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        Filler
    );
    const [calorias, setCalorias] = useState([]);
    const [tiempo, setTiempo] = useState([]);
    //const calorias = [6, 5, 5, 4, 6, 5, 4, 5, 3, 5];
    //const tiempo  = [2, 4, 5, 2, 4, 6, 5, 6, 3, 2];

    const options = {
        fill: true,
        responsive: true,
        scales: {
            y: {
                min: 0,
            },
        },
        plugins: {
            legend: {
                display: true,
            },
        },
    };

    useEffect(() => {
        setCalorias([]);
        setTiempo([]);
        axios.get("http://44.204.185.36:4000/api").then((res) => {
            let dataCalorias = res.data;
            let arrCalorias = [];
            let arrTime = [];

            
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1;
            let dd = today.getDate();

            let fecha = yyyy + "-" + mm + "-" + dd;

            dataCalorias.forEach((itemcaloria) => {
                if (itemcaloria.date == fecha) {
                    console.log(itemcaloria.date)
                    arrCalorias.push(itemcaloria.calories);
                    arrTime.push(itemcaloria.time);
                }
            });

            setCalorias(arrCalorias);
            setTiempo(arrTime);
        });
    }, []);

    const data = useMemo(function () {
        return {
            datasets: [
                {
                    label: "Calorias vs Tiempo",
                    data: calorias,
                    tension: 0.3,
                    borderColor: "rgb(208, 56, 63)",
                    pointRadius: 6,
                    pointBackgroundColor: "rgb(168, 22, 29)",
                    backgroundColor: "rgba(239, 25, 35, 0.3)",
                },
            ],
            labels: tiempo,
        };
    }, [calorias, tiempo]);

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};
