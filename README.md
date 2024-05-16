# Använda React Hooks och bibliotek

## Standard React Hooks

1. **useState**
   - Används för att hantera lokalt tillstånd i komponenter.
   - Exempel: Hantera räkning av biljetter i komponenter.

2. **useEffect**
   - Används för att hantera bieffekter som datahämtning och uppdateringar av DOM. Hämtar events från API när komponenten laddas.

## Custom Hook

1. **useStore**
   - Används för att hantera globalt tillstånd i applikationen med Zustand.
   - Funktionalitet: Lägga till och ta bort artiklar i varukorgen, uppdatera kvantiteter, hämta events från API och beställa biljetter.

## Externa bibliotek

1. **axios**
   - Används för att hantera API-anrop.

2. **zustand**
   - Jag har använt min Zustand store (`useStore.js`) för att hantera all funktionalitet relaterad till varukorgen, hämtning av eventdata från API, hantering av varukorgen, uppdatering av kvantiteter och biljetthantering.

3. **zustand-persist**
   - Middleware för Zustand för att persistera tillstånd i lokal lagring. Exempelvis spara varukorgens tillstånd i lokal lagring så att det bibehålls vid refresh. 

4. **react-router-dom**
   - Används för routing mellan olika pages i applikationen.

5. **date-fns**
   - Används för datumformatering. Jaag har använt detta för specifika layout syften, formatera eventdatum i komponenter.

6. **react-barcode**
   - Används för att generera streckkoder.

8. **react-icons**
   - Används för att inkludera ikoner.

### Pages
- **Home**: Startsidans komponent.
- **Events**: Lista över alla events.
- **Event**: Detaljsida för enskilt event.
- **Cart**: Varukorg där användare kan se och hantera sina valda biljetter.
- **Tickets**: Sidan där användare kan se sina beställda biljetter.

### Komponenter
- **EventItem**: Visar enskilda events i eventlistan.
- **CartItem**: Visar enskilda varukorgsartiklar.
- **TicketItem**: Visar enskilda biljetter på biljettsidan.
- **Navbar**: Global komponent för att navigera mellan sidor.
- **TicketCounter**: Återanvändbar komponent för att visa och hatera biljettkvantitet.
