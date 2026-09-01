__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "items",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 42,
                      "end": 47
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSNeverKeyword",
                          "start": 49,
                          "end": 54
                        },
                        "start": 49,
                        "end": 56
                      },
                      "start": 47,
                      "end": 56
                    },
                    "value": null,
                    "start": 39,
                    "end": 56
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNeverKeyword",
                      "start": 61,
                      "end": 66
                    },
                    "start": 61,
                    "end": 68
                  },
                  "start": 58,
                  "end": 68
                },
                "start": 38,
                "end": 68
              },
              "start": 36,
              "end": 68
            },
            "start": 35,
            "end": 68
          },
          "init": null,
          "definite": false,
          "start": 35,
          "end": 68
        }
      ],
      "declare": true,
      "start": 23,
      "end": 69
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnknownKeyword",
                      "start": 84,
                      "end": 91
                    },
                    "start": 84,
                    "end": 93
                  },
                  "start": 81,
                  "end": 93
                },
                "start": 78,
                "end": 93
              },
              "start": 76,
              "end": 93
            },
            "start": 74,
            "end": 93
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 97
          },
          "definite": false,
          "start": 74,
          "end": 97
        }
      ],
      "declare": false,
      "start": 70,
      "end": 98
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 111,
                      "end": 115
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTupleType",
                        "elementTypes": [],
                        "start": 117,
                        "end": 119
                      },
                      "start": 115,
                      "end": 119
                    },
                    "value": null,
                    "start": 108,
                    "end": 119
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSUnknownKeyword",
                      "start": 124,
                      "end": 131
                    },
                    "start": 124,
                    "end": 133
                  },
                  "start": 121,
                  "end": 133
                },
                "start": 107,
                "end": 133
              },
              "start": 105,
              "end": 133
            },
            "start": 103,
            "end": 133
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 136,
            "end": 137
          },
          "definite": false,
          "start": 103,
          "end": 137
        }
      ],
      "declare": false,
      "start": 99,
      "end": 138
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 23,
  "end": 138
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 23,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 31,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 39,
    "end": 42
  },
  {
    "type": "Identifier",
    "value": "items",
    "start": 42,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 47,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 49,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 56,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 58,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 61,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 70,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 74,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 81,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 84,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 99,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 103,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 108,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 111,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 121,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 124,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 132,
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
    "value": "s",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 137,
    "end": 138
  }
]
```
