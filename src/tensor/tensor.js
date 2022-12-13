import * as tf from "../../node_modules/@tensorflow/tfjs";
import * as tfvis from "../../node_modules/@tensorflow/tfjs-vis";
import { getData } from "./data.js";

window.onload = async() => {
    const data = getData(400);
    console.log(data);

    tfvis.render.scatterplot(
        { name: "逻辑回归训练数据" },
        {
            values: [
                data.filter(p => p.label === 1),
                data.filter(p => p.label === 0)
            ]
        }
    )
    const model = tf.sequential();
    model.add(tf.layers.dense({
        units: 1,
        inputShape: [2],
        activation: "sigmoid"
    }));
    model.compile({
        loss: tf.losses.logLoss,
        optimizer: tf.train.adam(0.1)
    });
    const inputs = tf.tensor(data.map(p => [p.x, p.y]));
    const lagels = tf.tensor(data.map(p => p.label));
    await model.fit(inputs, labels, {
        batchSize: 40,
        epochs: 20,
        callbacks: tfvis.show.fitCallbacks(
            { name: "训练效果" },
            ["loss"]
        )
    });
    window.predict = (form) => {
        const pred = model.prdict(tf.tensor([[form.x.value*1], form.y.value*1]));
        alert(`预测结果: ${pred.dataSync()[0]}`)
    }
}