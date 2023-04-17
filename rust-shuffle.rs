fn shuffle<T>(vector: &mut Vec<T>) {
    // Get the length of the vector.
    let length = vector.len();

    // Loop through the vector.
    for i in 0..length {
        // Get a random index between 0 and the current index.
        let random_index = rand::random::<usize>() % (length - i);

        // Swap the current element with the element at the random index.
        vector.swap(i, random_index);
    }
}
