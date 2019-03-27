export class ServerService {
  serverElements = [
    { type: "server", name: "Testserver", content: "Just a test!" },
    { type: "blueprint", name: "TestBlueprint", content: "Fuck the system!" }
  ];

  serverAdd(type: string, name: string, content: string) {
    this.serverElements.push({ type: type, name: name, content: content });
  }

  bluePrintAdd(type: string, name: string, content: string) {
    this.serverElements.push({ type: type, name: name, content: content });
  }

  updateContent(index: number, content: string) {
    this.serverElements[index].content = content;
  }
}
