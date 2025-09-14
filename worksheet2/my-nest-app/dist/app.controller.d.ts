export declare class AppController {
    getHello(): any;
    getArticles(): {
        id: string;
        title: string;
        content: string;
    }[];
    getArticleById(id: string): {
        id: string;
        title: string;
        content: string;
    } | undefined;
}
