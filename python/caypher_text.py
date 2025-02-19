def initial_permutation(matrix):
    # Example of Initial Permutation (just swapping rows and columns)
    # This is a simplified example for illustration
    permuted_matrix = []
    for i in range(8):
        permuted_matrix.append([matrix[j][i] for j in range(8)])
    return permuted_matrix

def final_permutation(matrix):
    # Final permutation (inverse of IP)
    permuted_matrix = []
    for i in range(8):
        permuted_matrix.append([matrix[j][i] for j in range(8)])
    return permuted_matrix

def swap_halves(matrix):
    # Swapping two halves of the matrix
    half_size = len(matrix) // 2
    matrix[0:half_size], matrix[half_size:] = matrix[half_size:], matrix[0:half_size]
    return matrix

def encrypt(matrix):
    print("Initial Permutation (IP):")
    matrix = initial_permutation(matrix)
    for row in matrix:
        print(row)
    
    print("\nAfter Swapping:")
    matrix = swap_halves(matrix)
    for row in matrix:
        print(row)
    
    print("\nFinal Permutation (FP):")
    matrix = final_permutation(matrix)
    for row in matrix:
        print(row)

    return matrix

def decrypt(matrix):
    print("Initial Permutation (IP):")
    matrix = initial_permutation(matrix)
    for row in matrix:
        print(row)
    
    print("\nAfter Swapping (Reversing):")
    matrix = swap_halves(matrix)
    for row in matrix:
        print(row)
    
    print("\nFinal Permutation (FP):")
    matrix = final_permutation(matrix)
    for row in matrix:
        print(row)

    return matrix

def input_matrix():
    matrix = []
    print("Enter an 8x8 matrix (each row of 8 integers separated by spaces):")
    for i in range(8):
        row = list(map(int, input(f"Enter row {i + 1}: ").split()))
        matrix.append(row)
    return matrix

def main():
    print("Choose an option:")
    print("1. Encrypt")
    print("2. Decrypt")
    choice = int(input())

    matrix = input_matrix()

    if choice == 1:
        print("\nEncryption Process:")
        encrypted_matrix = encrypt(matrix)
        print("\nEncrypted Matrix:")
        for row in encrypted_matrix:
            print(row)
    
    elif choice == 2:
        print("\nDecryption Process:")
        decrypted_matrix = decrypt(matrix)
        print("\nDecrypted Matrix:")
        for row in decrypted_matrix:
            print(row)

if __name__ == "__main__":
    main()
