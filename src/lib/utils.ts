export const GoSection = (id : string) => {
    const EL = document.getElementById(id);
    EL?.scrollIntoView({behavior:"smooth"})
}