---
title: Composant React Dialogue
components: Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide
---

# Dialog (dialogue)

<p class="description">Les boîtes de dialogue informent les utilisateurs sur une tâche et peuvent contenir des informations critiques, nécessiter des décisions ou impliquer plusieurs tâches.</p>

Un [Dialog](https://material.io/design/components/dialogs.html) est un type de fenêtre [modale](/components/modal/) qui apparaît devant le contenu de l'application pour fournir des informations critiques ou demander une décision. Les boîtes de dialogue désactivent toutes les fonctionnalités des applications lorsqu'elles apparaissent et restent à l'écran jusqu'à confirmation, exclusion ou action requise.

Les dialogues sont délibérément interruptifs, ils doivent donc être utilisés avec parcimonie.

## Dialogues simples

Simple dialogs can provide additional details or actions about a list item. For example, they can display avatars, icons, clarifying subtext, or orthogonal actions (such as adding an account).

Mécanique tactile:

- Choisir une option valide immédiatement l'option et ferme le menu
- Toucher en dehors de la boîte de dialogue ou appuyer sur Retour annule l'action et ferme la boîte de dialogue

{{"demo": "pages/components/dialogs/SimpleDialog.js"}}

## Alertes

Les alertes sont des interruptions urgentes, nécessitant un acquittement, qui informent l'utilisateur de la situation.

Most alerts don't need titles. They summarize a decision in a sentence or two by either:

- Poser une question (par exemple "Supprimer cette conversation?")
- Faire une déclaration relative aux boutons d'action

Use title bar alerts only for high-risk situations, such as the potential loss of connectivity. Users should be able to understand the choices based on the title and button text alone.

Si un titre est requis:

- Utilisez une question ou une déclaration claire avec une explication dans la zone de contenu, telle que "Effacer le stockage USB?".
- Évitez les excuses, les ambiguïtés ou les questions telles que "Attention"

{{"demo": "pages/components/dialogs/AlertDialog.js"}}

## Les transitions

Vous pouvez également permuter la transition. L’exemple suivant utilise `Slide`.

{{"demo": "pages/components/dialogs/AlertDialogSlide.js"}}

## Dialogues de formulaire

Les boîtes de dialogue de formulaire permettent aux utilisateurs de remplir des champs de formulaire dans une boîte de dialogue. Par exemple, si votre site invite les abonnés potentiels à saisir leur adresse e-mail, ils peuvent renseigner le champ e-mail et appuyer sur "Envoyer".

{{"demo": "pages/components/dialogs/FormDialog.js"}}

## Customized dialogs

Voici un exemple de personnalisation du composant. Vous pouvez en savoir plus dans la [page de documentation des overrides](/customization/components/).

The dialog has a close button added to aide usability.

{{"demo": "pages/components/dialogs/CustomizedDialogs.js"}}

## Dialogues plein écran

{{"demo": "pages/components/dialogs/FullScreenDialog.js"}}

## Tailles en option

Vous pouvez définir une largeur maximale dans la boîte de dialogue à l’aide de la valeur `maxWidth`, associée à la valeur `fullWidth`. Lorsque la propriété `fullWidth` est définie sur true, la boîte de dialogue s'adapte en fonction de la valeur `maxWidth`.

{{"demo": "pages/components/dialogs/MaxWidthDialog.js"}}

## Responsive full-screen

You may make a dialog responsively full screen using [`useMediaQuery`](/components/use-media-query/#usemediaquery).

```jsx
import useMediaQuery from '@material-ui/core/useMediaQuery';

function MyComponent() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return <Dialog fullScreen={fullScreen} />
}
```

{{"demo": "pages/components/dialogs/ResponsiveDialog.js"}}

## Dialogues de confirmation

Les dialogues de confirmation demandent aux utilisateurs de confirmer explicitement leur choix avant la validation d'une option. For example, users can listen to multiple ringtones but only make a final selection upon touching “OK”.

Appuyer sur “Annuler” dans une boîte de dialogue de confirmation ou appuyer sur Retour annule l'action, annule les modifications et ferme la boîte de dialogue.

{{"demo": "pages/components/dialogs/ConfirmationDialog.js"}}

## Dialogue glissable

Vous pouvez créer une boîte de dialogue déplaçable à l’aide de [react-draggable](https://github.com/mzabriskie/react-draggable). Pour ce faire, vous pouvez passer le composant importé `Draggable` en tant que proprieté `PaperComponent` du composant `Dialog`. Cela rend la totalité de la boîte de dialogue déplaçable.

{{"demo": "pages/components/dialogs/DraggableDialog.js"}}

## Défiler de longues contenu

Lorsque les boîtes de dialogue deviennent trop longues pour la fenêtre ou le périphérique de l'utilisateur, elles défilent.

- `scroll=paper` le contenu de la boîte de dialogue défile dans l'élément de papier.
- `scroll=body` le contenu de la boîte de dialogue défile dans l'élément body.

Essayez la démo ci-dessous pour voir ce que nous voulons dire:

{{"demo": "pages/components/dialogs/ScrollDialog.js"}}

## Limites

Follow the [Modal limitations section](/components/modal/#limitations).

## Accessibilité

Suivez la [section d'accessibilité de la Modal](/components/modal/#accessibility).