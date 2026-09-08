# web

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.4.2. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.


# Conducteur du TD

## 1.1 : Création du type BaseLocation et du type Team
## 1.2 : Création des données de teams
## 1.3 : Destructuration et affichage de l'objet TS

Affichage de la première team de la liste :
![alt text](docs/assets/1.3.1.png)

Vérifications : 
- Lorsqu'une propriété inexistante est utilisée : 
```typescript
export const teams: Array<Team> = [
    {
        id : 1,
        name : "Aurore",
        base : "Antartique",
        title : "Explorer pour comprendre",
        memberCount : 120
    },
```
Résultat : ![alt text](docs/assets/1.3.2.png)

## 2.1 : Création des types Status, CrewMember et définition des données crewMembers.ts
## 2.2 : Déclaration des fonctions fléchées
## 2.3 : Recherche de valeurs et affichage en utilisant les fonctions de la partie précédente 
