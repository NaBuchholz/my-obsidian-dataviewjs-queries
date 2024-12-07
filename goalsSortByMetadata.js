// Filtra as notas na pasta especificada e com o metadado term = "short"
const pages = dv.pages('"Journal/Goal"').where(p => p.term === "short");

if (pages && pages.length > 0) {
    // Agrupa as tarefas por nota
    const tasksByNote = pages.map(p => ({
        note: p.file.link,      // Link para a nota
        tasks: p.file.tasks.filter(task => task.text !== "example" && !task.completed),     // Lista de tarefas na nota
        startedDate: p.startedDate
    })).filter(g => g.tasks.length > 0); // Remove notas sem tarefas

    // Renderiza as tarefas agrupadas por nota
    for (const group of tasksByNote) {
    // Cria o título com o link da nota e o startedDate 
    const formattedStartDate = group.startedDate ? dv.date(group.startedDate).toFormat("MMM/yyyy") : "Sem início";
    const title = `${group.note}`
        dv.header(3, title);       // Nome da nota como cabeçalho
        dv.paragraph(`Início: ${formattedStartDate}`);
        dv.taskList(group.tasks, false); // Lista de tarefas da nota
    }
} else {
    dv.paragraph("Nenhuma tarefa encontrada nas notas com term = 'short'.");
}