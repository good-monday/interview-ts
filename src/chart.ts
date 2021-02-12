import * as asciichart from 'asciichart'
import chalk from 'chalk'

type Lines = Record<string, number[]>

export default function chart(lines: Lines) {
    const legends = Object.keys(lines)
    const values = Object.values(lines)
    
    const legendColors = [chalk.bgBlue, chalk.bgGreen, chalk.bgYellow, chalk.bgCyan]
    const chartColors = [asciichart.blue, asciichart.green, asciichart.yellow, asciichart.cyan]

    const config = {
        height: 65,
        colors: chartColors.slice(0, legends.length)
    }

    let legendOutput = ""

    for (let i = 0; i < legends.length; i++) {
        const color = legendColors[i]
        legendOutput = legendOutput + color(" " + legends[i] + " ")
    }

    console.log(legendOutput + "\n")
    console.log(
        asciichart.plot(values, config)
    )
}
