__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "globals",
        "raw": "\"globals\"",
        "start": 7,
        "end": 16
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 17
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "useFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 48
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "myGlobal",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 67
            },
            "typeArguments": null,
            "start": 52,
            "end": 67
          },
          "start": 50,
          "end": 67
        },
        "body": null,
        "expression": false,
        "start": 25,
        "end": 68
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 18,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 69
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "String",
    "value": "\"globals\"",
    "start": 7,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 25,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 33,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "useFoo",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 52,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "myGlobal",
    "start": 59,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myGlobal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "start": 12,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 28
        }
      ],
      "declare": true,
      "start": 0,
      "end": 29
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 30
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "myGlobal",
    "start": 12,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [],
      "source": {
        "type": "Literal",
        "value": "globals",
        "raw": "\"globals\"",
        "start": 7,
        "end": 16
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 17
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "useFoo",
          "optional": false,
          "typeAnnotation": null,
          "start": 42,
          "end": 48
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeQuery",
            "exprName": {
              "type": "Identifier",
              "decorators": [],
              "name": "myGlobal",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 67
            },
            "typeArguments": null,
            "start": 52,
            "end": 67
          },
          "start": 50,
          "end": 67
        },
        "body": null,
        "expression": false,
        "start": 25,
        "end": 68
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 18,
      "end": 68
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 69
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "String",
    "value": "\"globals\"",
    "start": 7,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 16,
    "end": 17
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 25,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 33,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "useFoo",
    "start": 42,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 48,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 52,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "myGlobal",
    "start": 59,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 67,
    "end": 68
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "myGlobal",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 22,
                "end": 28
              },
              "start": 20,
              "end": 28
            },
            "start": 12,
            "end": 28
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 28
        }
      ],
      "declare": true,
      "start": 0,
      "end": 29
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 30
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 8,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "myGlobal",
    "start": 12,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "useFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "useFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "importKind": "value",
          "start": 9,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 23,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "useBar",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 60
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 74
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "useFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 88
                  },
                  "typeArguments": null,
                  "start": 75,
                  "end": 88
                }
              ],
              "start": 74,
              "end": 89
            },
            "start": 64,
            "end": 89
          },
          "start": 62,
          "end": 89
        },
        "body": null,
        "expression": false,
        "start": 37,
        "end": 90
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 90
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 91
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "useFoo",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 37,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 45,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "useBar",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 64,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 75,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "useFoo",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "useFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "useFoo",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "importKind": "value",
          "start": 9,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "foo",
        "raw": "\"foo\"",
        "start": 23,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSDeclareFunction",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "useBaz",
          "optional": false,
          "typeAnnotation": null,
          "start": 54,
          "end": 60
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ReturnType",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 74
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeQuery",
                  "exprName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "useFoo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 88
                  },
                  "typeArguments": null,
                  "start": 75,
                  "end": 88
                }
              ],
              "start": 74,
              "end": 89
            },
            "start": 64,
            "end": 89
          },
          "start": 62,
          "end": 89
        },
        "body": null,
        "expression": false,
        "start": 37,
        "end": 90
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 30,
      "end": 90
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 94
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "useFoo",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 30,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 37,
    "end": 44
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 45,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "useBaz",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 60,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 64,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 75,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "useFoo",
    "start": 82,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 88,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "useBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "useBar",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "importKind": "value",
          "start": 9,
          "end": 15
        }
      ],
      "source": {
        "type": "Literal",
        "value": "bar",
        "raw": "\"bar\"",
        "start": 23,
        "end": 28
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 29
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "useBaz",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 45
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "useBaz",
            "optional": false,
            "typeAnnotation": null,
            "start": 39,
            "end": 45
          },
          "importKind": "value",
          "start": 39,
          "end": 45
        }
      ],
      "source": {
        "type": "Literal",
        "value": "baz",
        "raw": "\"baz\"",
        "start": 53,
        "end": 58
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 30,
      "end": 59
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "barResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 67,
            "end": 76
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useBar",
              "optional": false,
              "typeAnnotation": null,
              "start": 79,
              "end": 85
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 79,
            "end": 87
          },
          "definite": false,
          "start": 67,
          "end": 87
        }
      ],
      "declare": false,
      "start": 61,
      "end": 88
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bazResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 104
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useBaz",
              "optional": false,
              "typeAnnotation": null,
              "start": 107,
              "end": 113
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 107,
            "end": 115
          },
          "definite": false,
          "start": 95,
          "end": 115
        }
      ],
      "declare": false,
      "start": 89,
      "end": 116
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 127,
                "end": 133
              },
              "start": 125,
              "end": 133
            },
            "start": 124,
            "end": 133
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "myGlobal",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 144
          },
          "definite": false,
          "start": 124,
          "end": 144
        }
      ],
      "declare": false,
      "start": 118,
      "end": 145
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 145
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 0,
    "end": 6
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7,
    "end": 8
  },
  {
    "type": "Identifier",
    "value": "useBar",
    "start": 9,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 18,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 28,
    "end": 29
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "useBaz",
    "start": 39,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 48,
    "end": 52
  },
  {
    "type": "String",
    "value": "\"baz\"",
    "start": 53,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 61,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "barResult",
    "start": 67,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "useBar",
    "start": 79,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 89,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "bazResult",
    "start": 95,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "useBaz",
    "start": 107,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 118,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 127,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 134,
    "end": 135
  },
  {
    "type": "Identifier",
    "value": "myGlobal",
    "start": 136,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  }
]
```
