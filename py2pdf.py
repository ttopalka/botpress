import PyPDF2

# Chemin vers le fichier PDF que vous souhaitez lire
pdf_path = 'cukhaq13cbfw5ph94wi4-ROI%20(1).pdf'

# Fonction pour extraire le texte de chaque page du PDF
def extract_text_from_pdf():
    try:
        # Ouverture du fichier PDF
        with open(pdf_path, 'rb') as file:
            # Chargement du lecteur PDF
            reader = PyPDF2.PdfReader(file)

            # Parcours de chaque page du PDF
            for page_number in range(reader.numPages):
                # Obtention de l'objet de la page
                page = reader.getPage(page_number)

                # Récupération du contenu textuel de la page
                page_text = page.extract_text()

                # Affichage du texte de la page
                print(f"Page {page_number + 1}: {page_text}")
    except Exception as e:
        print(f"Une erreur s'est produite lors de la lecture du fichier PDF : {e}")

# Appel de la fonction pour extraire le texte du PDF
extract_text_from_pdf()