<?php
header('Content-Type: application/json');

// Vérifier si la méthode de la requête est POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lire les données envoyées dans le corps de la requête
    $orderDetails = json_decode(file_get_contents('php://input'), true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
        exit;
    }

    // Lire le fichier orders.json, ou créer un tableau vide si le fichier n'existe pas
    $file = '../orders.json';
    $orders = [];

    if (file_exists($file)) {
        $orders = json_decode(file_get_contents($file), true);
    }

    // Ajouter la nouvelle commande
    $orders[] = $orderDetails;

    // Enregistrer la commande dans le fichier orders.json
    if (file_put_contents($file, json_encode($orders, JSON_PRETTY_PRINT))) {
        echo json_encode(['success' => true, 'message' => 'Order saved successfully']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error saving order']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
