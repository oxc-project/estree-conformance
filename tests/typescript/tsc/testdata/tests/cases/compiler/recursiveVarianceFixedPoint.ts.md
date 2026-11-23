__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Store",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 27
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 28,
            "end": 29
          }
        ],
        "start": 27,
        "end": 30
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 45
                },
                "typeArguments": null,
                "start": 44,
                "end": 45
              },
              "start": 42,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 46
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "listener",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 59
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Listener",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 69
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 70,
                        "end": 71
                      },
                      "typeArguments": null,
                      "start": 70,
                      "end": 71
                    }
                  ],
                  "start": 69,
                  "end": 72
                },
                "start": 61,
                "end": 72
              },
              "start": 59,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 51,
            "end": 73
          }
        ],
        "start": 31,
        "end": 75
      },
      "declare": false,
      "start": 12,
      "end": 75
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Listener",
        "optional": false,
        "typeAnnotation": null,
        "start": 81,
        "end": 89
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 90,
            "end": 91
          }
        ],
        "start": 89,
        "end": 92
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "batch",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 103,
                  "end": 108
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 109,
                          "end": 110
                        },
                        "typeArguments": null,
                        "start": 109,
                        "end": 110
                      },
                      "start": 109,
                      "end": 112
                    }
                  ],
                  "start": 108,
                  "end": 113
                },
                "start": 103,
                "end": 113
              },
              "start": 101,
              "end": 113
            },
            "start": 96,
            "end": 113
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 118,
            "end": 122
          },
          "start": 115,
          "end": 122
        },
        "start": 95,
        "end": 122
      },
      "declare": false,
      "start": 76,
      "end": 123
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
            "name": "strings",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 151
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 152,
                      "end": 158
                    }
                  ],
                  "start": 151,
                  "end": 159
                },
                "start": 146,
                "end": 159
              },
              "start": 144,
              "end": 159
            },
            "start": 137,
            "end": 159
          },
          "init": null,
          "definite": false,
          "start": 137,
          "end": 159
        }
      ],
      "declare": true,
      "start": 125,
      "end": 160
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
            "name": "unknowns",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 188
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 189,
                      "end": 196
                    }
                  ],
                  "start": 188,
                  "end": 197
                },
                "start": 183,
                "end": 197
              },
              "start": 181,
              "end": 197
            },
            "start": 173,
            "end": 197
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 197
        }
      ],
      "declare": true,
      "start": 161,
      "end": 198
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
            "name": "stringListener",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Listener",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 235
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 236,
                      "end": 242
                    }
                  ],
                  "start": 235,
                  "end": 243
                },
                "start": 227,
                "end": 243
              },
              "start": 225,
              "end": 243
            },
            "start": 211,
            "end": 243
          },
          "init": null,
          "definite": false,
          "start": 211,
          "end": 243
        }
      ],
      "declare": true,
      "start": 199,
      "end": 244
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
            "name": "unknownListener",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Listener",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 282
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 283,
                      "end": 290
                    }
                  ],
                  "start": 282,
                  "end": 291
                },
                "start": 274,
                "end": 291
              },
              "start": 272,
              "end": 291
            },
            "start": 257,
            "end": 291
          },
          "init": null,
          "definite": false,
          "start": 257,
          "end": 291
        }
      ],
      "declare": true,
      "start": 245,
      "end": 292
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknowns",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 302
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strings",
          "optional": false,
          "typeAnnotation": null,
          "start": 305,
          "end": 312
        },
        "start": 294,
        "end": 312
      },
      "directive": null,
      "start": 294,
      "end": 313
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownListener",
          "optional": false,
          "typeAnnotation": null,
          "start": 323,
          "end": 338
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringListener",
          "optional": false,
          "typeAnnotation": null,
          "start": 341,
          "end": 355
        },
        "start": 323,
        "end": 355
      },
      "directive": null,
      "start": 323,
      "end": 356
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 366
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 51,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "Listener",
    "start": 61,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 76,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Listener",
    "start": 81,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "batch",
    "start": 96,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 115,
    "end": 117
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 118,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 125,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 146,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 161,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "unknowns",
    "start": 173,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 183,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 189,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 199,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 207,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "stringListener",
    "start": 211,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "Listener",
    "start": 227,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 245,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "unknownListener",
    "start": 257,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Listener",
    "start": 274,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 283,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "unknowns",
    "start": 294,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 305,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "unknownListener",
    "start": 323,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "stringListener",
    "start": 341,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Listener",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 25
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 27
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 26,
            "end": 27
          }
        ],
        "start": 25,
        "end": 28
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "batch",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 39,
                  "end": 44
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 45,
                          "end": 46
                        },
                        "typeArguments": null,
                        "start": 45,
                        "end": 46
                      },
                      "start": 45,
                      "end": 48
                    }
                  ],
                  "start": 44,
                  "end": 49
                },
                "start": 39,
                "end": 49
              },
              "start": 37,
              "end": 49
            },
            "start": 32,
            "end": 49
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 54,
            "end": 58
          },
          "start": 51,
          "end": 58
        },
        "start": 31,
        "end": 58
      },
      "declare": false,
      "start": 12,
      "end": 59
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Store",
        "optional": false,
        "typeAnnotation": null,
        "start": 70,
        "end": 75
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 77
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 76,
            "end": 77
          }
        ],
        "start": 75,
        "end": 78
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "listener",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 93
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Listener",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 95,
                  "end": 103
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 104,
                        "end": 105
                      },
                      "typeArguments": null,
                      "start": 104,
                      "end": 105
                    }
                  ],
                  "start": 103,
                  "end": 106
                },
                "start": 95,
                "end": 106
              },
              "start": 93,
              "end": 106
            },
            "accessibility": null,
            "static": false,
            "start": 85,
            "end": 107
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 112,
              "end": 117
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 119,
                  "end": 120
                },
                "typeArguments": null,
                "start": 119,
                "end": 120
              },
              "start": 117,
              "end": 120
            },
            "accessibility": null,
            "static": false,
            "start": 112,
            "end": 121
          }
        ],
        "start": 79,
        "end": 123
      },
      "declare": false,
      "start": 60,
      "end": 123
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
            "name": "strings",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 146,
                  "end": 151
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 152,
                      "end": 158
                    }
                  ],
                  "start": 151,
                  "end": 159
                },
                "start": 146,
                "end": 159
              },
              "start": 144,
              "end": 159
            },
            "start": 137,
            "end": 159
          },
          "init": null,
          "definite": false,
          "start": 137,
          "end": 159
        }
      ],
      "declare": true,
      "start": 125,
      "end": 160
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
            "name": "unknowns",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Store",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 183,
                  "end": 188
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 189,
                      "end": 196
                    }
                  ],
                  "start": 188,
                  "end": 197
                },
                "start": 183,
                "end": 197
              },
              "start": 181,
              "end": 197
            },
            "start": 173,
            "end": 197
          },
          "init": null,
          "definite": false,
          "start": 173,
          "end": 197
        }
      ],
      "declare": true,
      "start": 161,
      "end": 198
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
            "name": "stringListener",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Listener",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 227,
                  "end": 235
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 236,
                      "end": 242
                    }
                  ],
                  "start": 235,
                  "end": 243
                },
                "start": 227,
                "end": 243
              },
              "start": 225,
              "end": 243
            },
            "start": 211,
            "end": 243
          },
          "init": null,
          "definite": false,
          "start": 211,
          "end": 243
        }
      ],
      "declare": true,
      "start": 199,
      "end": 244
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
            "name": "unknownListener",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Listener",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 274,
                  "end": 282
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 283,
                      "end": 290
                    }
                  ],
                  "start": 282,
                  "end": 291
                },
                "start": 274,
                "end": 291
              },
              "start": 272,
              "end": 291
            },
            "start": 257,
            "end": 291
          },
          "init": null,
          "definite": false,
          "start": 257,
          "end": 291
        }
      ],
      "declare": true,
      "start": 245,
      "end": 292
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownListener",
          "optional": false,
          "typeAnnotation": null,
          "start": 294,
          "end": 309
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringListener",
          "optional": false,
          "typeAnnotation": null,
          "start": 312,
          "end": 326
        },
        "start": 294,
        "end": 326
      },
      "directive": null,
      "start": 294,
      "end": 327
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknowns",
          "optional": false,
          "typeAnnotation": null,
          "start": 337,
          "end": 345
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strings",
          "optional": false,
          "typeAnnotation": null,
          "start": 348,
          "end": 355
        },
        "start": 337,
        "end": 355
      },
      "directive": null,
      "start": 337,
      "end": 356
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 366
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 12,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Listener",
    "start": 17,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "batch",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 39,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "=>",
    "start": 51,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 54,
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
    "value": "interface",
    "start": 60,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 70,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 85,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Listener",
    "start": 95,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 112,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 122,
    "end": 123
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 125,
    "end": 132
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 133,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 146,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 151,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 152,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 161,
    "end": 168
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 169,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "unknowns",
    "start": 173,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "Store",
    "start": 183,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 189,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 199,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 207,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "stringListener",
    "start": 211,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "Listener",
    "start": 227,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 235,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 236,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 245,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 253,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "unknownListener",
    "start": 257,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Listener",
    "start": 274,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 282,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 283,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 291,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "unknownListener",
    "start": 294,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "stringListener",
    "start": 312,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "unknowns",
    "start": 337,
    "end": 345
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 348,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 355,
    "end": 356
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ColumnDef",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 31
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Row",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 35
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 32,
            "end": 35
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 42
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 45,
              "end": 52
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 37,
            "end": 52
          }
        ],
        "start": 31,
        "end": 53
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cell",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 64
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "column",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Column",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 76,
                          "end": 82
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Row",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 83,
                                "end": 86
                              },
                              "typeArguments": null,
                              "start": 83,
                              "end": 86
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 88,
                                "end": 93
                              },
                              "typeArguments": null,
                              "start": 88,
                              "end": 93
                            }
                          ],
                          "start": 82,
                          "end": 94
                        },
                        "start": 76,
                        "end": 94
                      },
                      "start": 74,
                      "end": 94
                    },
                    "start": 68,
                    "end": 94
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 99,
                    "end": 103
                  },
                  "start": 96,
                  "end": 103
                },
                "start": 67,
                "end": 103
              },
              "start": 65,
              "end": 103
            },
            "accessibility": null,
            "static": false,
            "start": 60,
            "end": 104
          }
        ],
        "start": 54,
        "end": 106
      },
      "declare": false,
      "start": 12,
      "end": 106
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Column",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 123
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Row",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 127
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 124,
            "end": 127
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 129,
              "end": 134
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 137,
              "end": 144
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 129,
            "end": 144
          }
        ],
        "start": 123,
        "end": 145
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "accessorFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 152,
              "end": 162
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "row",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Row",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 171,
                          "end": 174
                        },
                        "typeArguments": null,
                        "start": 171,
                        "end": 174
                      },
                      "start": 169,
                      "end": 174
                    },
                    "start": 166,
                    "end": 174
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 179,
                      "end": 184
                    },
                    "typeArguments": null,
                    "start": 179,
                    "end": 184
                  },
                  "start": 176,
                  "end": 184
                },
                "start": 165,
                "end": 184
              },
              "start": 163,
              "end": 184
            },
            "accessibility": null,
            "static": false,
            "start": 152,
            "end": 185
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "columnDef",
              "optional": false,
              "typeAnnotation": null,
              "start": 190,
              "end": 199
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ColumnDef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 210
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Row",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 211,
                        "end": 214
                      },
                      "typeArguments": null,
                      "start": 211,
                      "end": 214
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 216,
                        "end": 221
                      },
                      "typeArguments": null,
                      "start": 216,
                      "end": 221
                    }
                  ],
                  "start": 210,
                  "end": 222
                },
                "start": 201,
                "end": 222
              },
              "start": 199,
              "end": 222
            },
            "accessibility": null,
            "static": false,
            "start": 190,
            "end": 223
          }
        ],
        "start": 146,
        "end": 225
      },
      "declare": false,
      "start": 107,
      "end": 225
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
            "name": "stringColumn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ColumnDef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 262
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 265,
                            "end": 269
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 271,
                              "end": 277
                            },
                            "start": 269,
                            "end": 277
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 265,
                          "end": 277
                        }
                      ],
                      "start": 263,
                      "end": 279
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 281,
                      "end": 287
                    }
                  ],
                  "start": 262,
                  "end": 288
                },
                "start": 253,
                "end": 288
              },
              "start": 251,
              "end": 288
            },
            "start": 239,
            "end": 288
          },
          "init": null,
          "definite": false,
          "start": 239,
          "end": 288
        }
      ],
      "declare": true,
      "start": 227,
      "end": 289
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
            "name": "unknownColumn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ColumnDef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 326
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 329,
                            "end": 333
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 335,
                              "end": 341
                            },
                            "start": 333,
                            "end": 341
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 329,
                          "end": 341
                        }
                      ],
                      "start": 327,
                      "end": 343
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 345,
                      "end": 352
                    }
                  ],
                  "start": 326,
                  "end": 353
                },
                "start": 317,
                "end": 353
              },
              "start": 315,
              "end": 353
            },
            "start": 302,
            "end": 353
          },
          "init": null,
          "definite": false,
          "start": 302,
          "end": 353
        }
      ],
      "declare": true,
      "start": 290,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownColumn",
          "optional": false,
          "typeAnnotation": null,
          "start": 356,
          "end": 369
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringColumn",
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 384
        },
        "start": 356,
        "end": 384
      },
      "directive": null,
      "start": 356,
      "end": 385
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringColumn",
          "optional": false,
          "typeAnnotation": null,
          "start": 395,
          "end": 407
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownColumn",
          "optional": false,
          "typeAnnotation": null,
          "start": 410,
          "end": 423
        },
        "start": 395,
        "end": 423
      },
      "directive": null,
      "start": 395,
      "end": 424
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 434
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "ColumnDef",
    "start": 22,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 32,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 45,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "cell",
    "start": 60,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "column",
    "start": 68,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Column",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 83,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 96,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 107,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "Column",
    "start": 117,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 123,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 124,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 129,
    "end": 134
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 135,
    "end": 136
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 137,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 146,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "accessorFn",
    "start": 152,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 166,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 171,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 176,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "columnDef",
    "start": 190,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "ColumnDef",
    "start": 201,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 227,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "stringColumn",
    "start": 239,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "ColumnDef",
    "start": 253,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 290,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "unknownColumn",
    "start": 302,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "ColumnDef",
    "start": 317,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 345,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "unknownColumn",
    "start": 356,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "stringColumn",
    "start": 372,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "stringColumn",
    "start": 395,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "unknownColumn",
    "start": 410,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Column",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 28
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Row",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 32
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 29,
            "end": 32
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 34,
              "end": 39
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 42,
              "end": 49
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 34,
            "end": 49
          }
        ],
        "start": 28,
        "end": 50
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "columnDef",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ColumnDef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 68,
                  "end": 77
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Row",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 78,
                        "end": 81
                      },
                      "typeArguments": null,
                      "start": 78,
                      "end": 81
                    },
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 83,
                        "end": 88
                      },
                      "typeArguments": null,
                      "start": 83,
                      "end": 88
                    }
                  ],
                  "start": 77,
                  "end": 89
                },
                "start": 68,
                "end": 89
              },
              "start": 66,
              "end": 89
            },
            "accessibility": null,
            "static": false,
            "start": 57,
            "end": 90
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "accessorFn",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 105
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "row",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Row",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 114,
                          "end": 117
                        },
                        "typeArguments": null,
                        "start": 114,
                        "end": 117
                      },
                      "start": 112,
                      "end": 117
                    },
                    "start": 109,
                    "end": 117
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 122,
                      "end": 127
                    },
                    "typeArguments": null,
                    "start": 122,
                    "end": 127
                  },
                  "start": 119,
                  "end": 127
                },
                "start": 108,
                "end": 127
              },
              "start": 106,
              "end": 127
            },
            "accessibility": null,
            "static": false,
            "start": 95,
            "end": 128
          }
        ],
        "start": 51,
        "end": 130
      },
      "declare": false,
      "start": 12,
      "end": 130
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ColumnDef",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 150
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Row",
              "optional": false,
              "typeAnnotation": null,
              "start": 151,
              "end": 154
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 151,
            "end": 154
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Value",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 161
            },
            "constraint": null,
            "default": {
              "type": "TSUnknownKeyword",
              "start": 164,
              "end": 171
            },
            "in": false,
            "out": false,
            "const": false,
            "start": 156,
            "end": 171
          }
        ],
        "start": 150,
        "end": 172
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "cell",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 183
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "column",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Column",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 195,
                          "end": 201
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Row",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 202,
                                "end": 205
                              },
                              "typeArguments": null,
                              "start": 202,
                              "end": 205
                            },
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 207,
                                "end": 212
                              },
                              "typeArguments": null,
                              "start": 207,
                              "end": 212
                            }
                          ],
                          "start": 201,
                          "end": 213
                        },
                        "start": 195,
                        "end": 213
                      },
                      "start": 193,
                      "end": 213
                    },
                    "start": 187,
                    "end": 213
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 218,
                    "end": 222
                  },
                  "start": 215,
                  "end": 222
                },
                "start": 186,
                "end": 222
              },
              "start": 184,
              "end": 222
            },
            "accessibility": null,
            "static": false,
            "start": 179,
            "end": 223
          }
        ],
        "start": 173,
        "end": 225
      },
      "declare": false,
      "start": 131,
      "end": 225
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
            "name": "stringColumn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ColumnDef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 253,
                  "end": 262
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 265,
                            "end": 269
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 271,
                              "end": 277
                            },
                            "start": 269,
                            "end": 277
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 265,
                          "end": 277
                        }
                      ],
                      "start": 263,
                      "end": 279
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 281,
                      "end": 287
                    }
                  ],
                  "start": 262,
                  "end": 288
                },
                "start": 253,
                "end": 288
              },
              "start": 251,
              "end": 288
            },
            "start": 239,
            "end": 288
          },
          "init": null,
          "definite": false,
          "start": 239,
          "end": 288
        }
      ],
      "declare": true,
      "start": 227,
      "end": 289
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
            "name": "unknownColumn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ColumnDef",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 317,
                  "end": 326
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "name",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 329,
                            "end": 333
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 335,
                              "end": 341
                            },
                            "start": 333,
                            "end": 341
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 329,
                          "end": 341
                        }
                      ],
                      "start": 327,
                      "end": 343
                    },
                    {
                      "type": "TSUnknownKeyword",
                      "start": 345,
                      "end": 352
                    }
                  ],
                  "start": 326,
                  "end": 353
                },
                "start": 317,
                "end": 353
              },
              "start": 315,
              "end": 353
            },
            "start": 302,
            "end": 353
          },
          "init": null,
          "definite": false,
          "start": 302,
          "end": 353
        }
      ],
      "declare": true,
      "start": 290,
      "end": 354
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownColumn",
          "optional": false,
          "typeAnnotation": null,
          "start": 356,
          "end": 369
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringColumn",
          "optional": false,
          "typeAnnotation": null,
          "start": 372,
          "end": 384
        },
        "start": 356,
        "end": 384
      },
      "directive": null,
      "start": 356,
      "end": 385
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringColumn",
          "optional": false,
          "typeAnnotation": null,
          "start": 395,
          "end": 407
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownColumn",
          "optional": false,
          "typeAnnotation": null,
          "start": 410,
          "end": 423
        },
        "start": 395,
        "end": 423
      },
      "directive": null,
      "start": 395,
      "end": 424
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 434
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Column",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 29,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 34,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 42,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "columnDef",
    "start": 57,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "ColumnDef",
    "start": 68,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 78,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 83,
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
  },
  {
    "type": "Identifier",
    "value": "accessorFn",
    "start": 95,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "row",
    "start": 109,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 114,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 119,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 122,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 131,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "ColumnDef",
    "start": 141,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 150,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 151,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 154,
    "end": 155
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 156,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 164,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 171,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "cell",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "column",
    "start": 187,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "Column",
    "start": 195,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "Row",
    "start": 202,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "Value",
    "start": 207,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 215,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 218,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 227,
    "end": 234
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 235,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "stringColumn",
    "start": 239,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "ColumnDef",
    "start": 253,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 265,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 271,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 279,
    "end": 280
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 281,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 290,
    "end": 297
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 298,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "unknownColumn",
    "start": 302,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "Identifier",
    "value": "ColumnDef",
    "start": 317,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 327,
    "end": 328
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 329,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 345,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "unknownColumn",
    "start": 356,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "stringColumn",
    "start": 372,
    "end": 384
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 384,
    "end": 385
  },
  {
    "type": "Identifier",
    "value": "stringColumn",
    "start": 395,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "unknownColumn",
    "start": 410,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 423,
    "end": 424
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Tree",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 26
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 28
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 28
          }
        ],
        "start": 26,
        "end": 29
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 50
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 53
                },
                "typeArguments": null,
                "start": 52,
                "end": 53
              },
              "start": 50,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 36,
            "end": 54
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 68,
              "end": 76
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Tree",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 87,
                      "end": 91
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 92,
                            "end": 93
                          },
                          "typeArguments": null,
                          "start": 92,
                          "end": 93
                        }
                      ],
                      "start": 91,
                      "end": 94
                    },
                    "start": 87,
                    "end": 94
                  },
                  "start": 87,
                  "end": 96
                },
                "start": 78,
                "end": 96
              },
              "start": 76,
              "end": 96
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 97
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "metadata",
              "optional": false,
              "typeAnnotation": null,
              "start": 111,
              "end": 119
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 121,
                  "end": 124
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 125,
                      "end": 131
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 133,
                      "end": 139
                    }
                  ],
                  "start": 124,
                  "end": 140
                },
                "start": 121,
                "end": 140
              },
              "start": 119,
              "end": 140
            },
            "accessibility": null,
            "static": false,
            "start": 102,
            "end": 141
          }
        ],
        "start": 30,
        "end": 143
      },
      "declare": false,
      "start": 12,
      "end": 143
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Phantom",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 161
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 162,
              "end": 163
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 162,
            "end": 163
          }
        ],
        "start": 161,
        "end": 164
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 171,
              "end": 175
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Phantom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 184
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 185,
                        "end": 186
                      },
                      "typeArguments": null,
                      "start": 185,
                      "end": 186
                    }
                  ],
                  "start": 184,
                  "end": 187
                },
                "start": 177,
                "end": 187
              },
              "start": 175,
              "end": 187
            },
            "accessibility": null,
            "static": false,
            "start": 171,
            "end": 188
          }
        ],
        "start": 165,
        "end": 190
      },
      "declare": false,
      "start": 144,
      "end": 190
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
            "name": "stringTree",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 220
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 221,
                      "end": 227
                    }
                  ],
                  "start": 220,
                  "end": 228
                },
                "start": 216,
                "end": 228
              },
              "start": 214,
              "end": 228
            },
            "start": 204,
            "end": 228
          },
          "init": null,
          "definite": false,
          "start": 204,
          "end": 228
        }
      ],
      "declare": true,
      "start": 192,
      "end": 229
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
            "name": "unknownTree",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Tree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 255,
                  "end": 259
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 260,
                      "end": 267
                    }
                  ],
                  "start": 259,
                  "end": 268
                },
                "start": 255,
                "end": 268
              },
              "start": 253,
              "end": 268
            },
            "start": 242,
            "end": 268
          },
          "init": null,
          "definite": false,
          "start": 242,
          "end": 268
        }
      ],
      "declare": true,
      "start": 230,
      "end": 269
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
            "name": "stringPhantom",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Phantom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 297,
                  "end": 304
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 305,
                      "end": 311
                    }
                  ],
                  "start": 304,
                  "end": 312
                },
                "start": 297,
                "end": 312
              },
              "start": 295,
              "end": 312
            },
            "start": 282,
            "end": 312
          },
          "init": null,
          "definite": false,
          "start": 282,
          "end": 312
        }
      ],
      "declare": true,
      "start": 270,
      "end": 313
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
            "name": "numberPhantom",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Phantom",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 341,
                  "end": 348
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 349,
                      "end": 355
                    }
                  ],
                  "start": 348,
                  "end": 356
                },
                "start": 341,
                "end": 356
              },
              "start": 339,
              "end": 356
            },
            "start": 326,
            "end": 356
          },
          "init": null,
          "definite": false,
          "start": 326,
          "end": 356
        }
      ],
      "declare": true,
      "start": 314,
      "end": 357
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownTree",
          "optional": false,
          "typeAnnotation": null,
          "start": 359,
          "end": 370
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringTree",
          "optional": false,
          "typeAnnotation": null,
          "start": 373,
          "end": 383
        },
        "start": 359,
        "end": 383
      },
      "directive": null,
      "start": 359,
      "end": 384
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringTree",
          "optional": false,
          "typeAnnotation": null,
          "start": 385,
          "end": 395
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownTree",
          "optional": false,
          "typeAnnotation": null,
          "start": 398,
          "end": 409
        },
        "start": 385,
        "end": 409
      },
      "directive": null,
      "start": 385,
      "end": 410
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringPhantom",
          "optional": false,
          "typeAnnotation": null,
          "start": 420,
          "end": 433
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberPhantom",
          "optional": false,
          "typeAnnotation": null,
          "start": 436,
          "end": 449
        },
        "start": 420,
        "end": 449
      },
      "directive": null,
      "start": 420,
      "end": 450
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "numberPhantom",
          "optional": false,
          "typeAnnotation": null,
          "start": 451,
          "end": 464
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringPhantom",
          "optional": false,
          "typeAnnotation": null,
          "start": 467,
          "end": 480
        },
        "start": 451,
        "end": 480
      },
      "directive": null,
      "start": 451,
      "end": 481
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 482
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 22,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 36,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 59,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 68,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 78,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 87,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 102,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "metadata",
    "start": 111,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Map",
    "start": 121,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 125,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 144,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "Phantom",
    "start": 154,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 171,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "Phantom",
    "start": 177,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 192,
    "end": 199
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 200,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "stringTree",
    "start": 204,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 216,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 221,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 230,
    "end": 237
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 238,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "unknownTree",
    "start": 242,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Tree",
    "start": 255,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 260,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 270,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 278,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "stringPhantom",
    "start": 282,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Phantom",
    "start": 297,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 305,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 314,
    "end": 321
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 322,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "numberPhantom",
    "start": 326,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "Phantom",
    "start": 341,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 356,
    "end": 357
  },
  {
    "type": "Identifier",
    "value": "unknownTree",
    "start": 359,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "stringTree",
    "start": 373,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 383,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "stringTree",
    "start": 385,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "unknownTree",
    "start": 398,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 409,
    "end": 410
  },
  {
    "type": "Identifier",
    "value": "stringPhantom",
    "start": 420,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 434,
    "end": 435
  },
  {
    "type": "Identifier",
    "value": "numberPhantom",
    "start": 436,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "numberPhantom",
    "start": 451,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "stringPhantom",
    "start": 467,
    "end": 480
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 480,
    "end": 481
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Outer",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 27
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 29
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 28,
            "end": 29
          }
        ],
        "start": 27,
        "end": 30
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 42
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 44,
                  "end": 45
                },
                "typeArguments": null,
                "start": 44,
                "end": 45
              },
              "start": 42,
              "end": 45
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 46
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 51,
              "end": 55
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Inner",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 57,
                  "end": 62
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Outer",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 63,
                        "end": 68
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 69,
                              "end": 70
                            },
                            "typeArguments": null,
                            "start": 69,
                            "end": 70
                          }
                        ],
                        "start": 68,
                        "end": 71
                      },
                      "start": 63,
                      "end": 71
                    }
                  ],
                  "start": 62,
                  "end": 72
                },
                "start": 57,
                "end": 72
              },
              "start": 55,
              "end": 72
            },
            "accessibility": null,
            "static": false,
            "start": 51,
            "end": 73
          }
        ],
        "start": 31,
        "end": 75
      },
      "declare": false,
      "start": 12,
      "end": 75
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Inner",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 91
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 93
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 92,
            "end": 93
          }
        ],
        "start": 91,
        "end": 94
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "consume",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 108
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 118,
                          "end": 119
                        },
                        "typeArguments": null,
                        "start": 118,
                        "end": 119
                      },
                      "start": 116,
                      "end": 119
                    },
                    "start": 111,
                    "end": 119
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 124,
                    "end": 128
                  },
                  "start": 121,
                  "end": 128
                },
                "start": 110,
                "end": 128
              },
              "start": 108,
              "end": 128
            },
            "accessibility": null,
            "static": false,
            "start": 101,
            "end": 129
          }
        ],
        "start": 95,
        "end": 131
      },
      "declare": false,
      "start": 76,
      "end": 131
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
            "name": "strings",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 154,
                  "end": 159
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 160,
                      "end": 166
                    }
                  ],
                  "start": 159,
                  "end": 167
                },
                "start": 154,
                "end": 167
              },
              "start": 152,
              "end": 167
            },
            "start": 145,
            "end": 167
          },
          "init": null,
          "definite": false,
          "start": 145,
          "end": 167
        }
      ],
      "declare": true,
      "start": 133,
      "end": 168
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
            "name": "unknowns",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Outer",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 191,
                  "end": 196
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 197,
                      "end": 204
                    }
                  ],
                  "start": 196,
                  "end": 205
                },
                "start": 191,
                "end": 205
              },
              "start": 189,
              "end": 205
            },
            "start": 181,
            "end": 205
          },
          "init": null,
          "definite": false,
          "start": 181,
          "end": 205
        }
      ],
      "declare": true,
      "start": 169,
      "end": 206
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknowns",
          "optional": false,
          "typeAnnotation": null,
          "start": 208,
          "end": 216
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strings",
          "optional": false,
          "typeAnnotation": null,
          "start": 219,
          "end": 226
        },
        "start": 208,
        "end": 226
      },
      "directive": null,
      "start": 208,
      "end": 227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strings",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 244
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknowns",
          "optional": false,
          "typeAnnotation": null,
          "start": 247,
          "end": 255
        },
        "start": 237,
        "end": 255
      },
      "directive": null,
      "start": 237,
      "end": 256
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 266
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 22,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 27,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 28,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 37,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 51,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 63,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 76,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Inner",
    "start": 86,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 101,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 111,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "T",
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
    "type": "Keyword",
    "value": "void",
    "start": 124,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 128,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 133,
    "end": 140
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 141,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 145,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 169,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 177,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "unknowns",
    "start": 181,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "Outer",
    "start": 191,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 197,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "unknowns",
    "start": 208,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 219,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 237,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "unknowns",
    "start": 247,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnnotatedTree",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 35
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 41
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": true,
            "const": false,
            "start": 36,
            "end": 41
          }
        ],
        "start": 35,
        "end": 42
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 65,
                  "end": 66
                },
                "typeArguments": null,
                "start": 65,
                "end": 66
              },
              "start": 63,
              "end": 66
            },
            "accessibility": null,
            "static": false,
            "start": 49,
            "end": 67
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 81,
              "end": 89
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "AnnotatedTree",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 104
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 105,
                          "end": 106
                        },
                        "typeArguments": null,
                        "start": 105,
                        "end": 106
                      }
                    ],
                    "start": 104,
                    "end": 107
                  },
                  "start": 91,
                  "end": 107
                },
                "start": 91,
                "end": 109
              },
              "start": 89,
              "end": 109
            },
            "accessibility": null,
            "static": false,
            "start": 72,
            "end": 110
          }
        ],
        "start": 43,
        "end": 112
      },
      "declare": false,
      "start": 12,
      "end": 112
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AnnotatedStore",
        "optional": false,
        "typeAnnotation": null,
        "start": 123,
        "end": 137
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 145,
              "end": 146
            },
            "constraint": null,
            "default": null,
            "in": true,
            "out": true,
            "const": false,
            "start": 138,
            "end": 146
          }
        ],
        "start": 137,
        "end": 147
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 159
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 161,
                  "end": 162
                },
                "typeArguments": null,
                "start": 161,
                "end": 162
              },
              "start": 159,
              "end": 162
            },
            "accessibility": null,
            "static": false,
            "start": 154,
            "end": 163
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "listener",
              "optional": false,
              "typeAnnotation": null,
              "start": 168,
              "end": 176
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "batch",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "AnnotatedStore",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 186,
                          "end": 200
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSArrayType",
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 201,
                                  "end": 202
                                },
                                "typeArguments": null,
                                "start": 201,
                                "end": 202
                              },
                              "start": 201,
                              "end": 204
                            }
                          ],
                          "start": 200,
                          "end": 205
                        },
                        "start": 186,
                        "end": 205
                      },
                      "start": 184,
                      "end": 205
                    },
                    "start": 179,
                    "end": 205
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 210,
                    "end": 214
                  },
                  "start": 207,
                  "end": 214
                },
                "start": 178,
                "end": 214
              },
              "start": 176,
              "end": 214
            },
            "accessibility": null,
            "static": false,
            "start": 168,
            "end": 215
          }
        ],
        "start": 148,
        "end": 217
      },
      "declare": false,
      "start": 113,
      "end": 217
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
            "name": "stringTree",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnnotatedTree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 256
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 257,
                      "end": 263
                    }
                  ],
                  "start": 256,
                  "end": 264
                },
                "start": 243,
                "end": 264
              },
              "start": 241,
              "end": 264
            },
            "start": 231,
            "end": 264
          },
          "init": null,
          "definite": false,
          "start": 231,
          "end": 264
        }
      ],
      "declare": true,
      "start": 219,
      "end": 265
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
            "name": "unknownTree",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnnotatedTree",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 304
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 305,
                      "end": 312
                    }
                  ],
                  "start": 304,
                  "end": 313
                },
                "start": 291,
                "end": 313
              },
              "start": 289,
              "end": 313
            },
            "start": 278,
            "end": 313
          },
          "init": null,
          "definite": false,
          "start": 278,
          "end": 313
        }
      ],
      "declare": true,
      "start": 266,
      "end": 314
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
            "name": "stringStore",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnnotatedStore",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 340,
                  "end": 354
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 355,
                      "end": 361
                    }
                  ],
                  "start": 354,
                  "end": 362
                },
                "start": 340,
                "end": 362
              },
              "start": 338,
              "end": 362
            },
            "start": 327,
            "end": 362
          },
          "init": null,
          "definite": false,
          "start": 327,
          "end": 362
        }
      ],
      "declare": true,
      "start": 315,
      "end": 363
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
            "name": "unknownStore",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AnnotatedStore",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 404
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 405,
                      "end": 412
                    }
                  ],
                  "start": 404,
                  "end": 413
                },
                "start": 390,
                "end": 413
              },
              "start": 388,
              "end": 413
            },
            "start": 376,
            "end": 413
          },
          "init": null,
          "definite": false,
          "start": 376,
          "end": 413
        }
      ],
      "declare": true,
      "start": 364,
      "end": 414
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownTree",
          "optional": false,
          "typeAnnotation": null,
          "start": 416,
          "end": 427
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringTree",
          "optional": false,
          "typeAnnotation": null,
          "start": 430,
          "end": 440
        },
        "start": 416,
        "end": 440
      },
      "directive": null,
      "start": 416,
      "end": 441
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringTree",
          "optional": false,
          "typeAnnotation": null,
          "start": 442,
          "end": 452
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownTree",
          "optional": false,
          "typeAnnotation": null,
          "start": 455,
          "end": 466
        },
        "start": 442,
        "end": 466
      },
      "directive": null,
      "start": 442,
      "end": 467
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownStore",
          "optional": false,
          "typeAnnotation": null,
          "start": 477,
          "end": 489
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringStore",
          "optional": false,
          "typeAnnotation": null,
          "start": 492,
          "end": 503
        },
        "start": 477,
        "end": 503
      },
      "directive": null,
      "start": 477,
      "end": 504
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringStore",
          "optional": false,
          "typeAnnotation": null,
          "start": 514,
          "end": 525
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownStore",
          "optional": false,
          "typeAnnotation": null,
          "start": 528,
          "end": 540
        },
        "start": 514,
        "end": 540
      },
      "directive": null,
      "start": 514,
      "end": 541
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 551
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "AnnotatedTree",
    "start": 22,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 36,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 49,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 58,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 72,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 81,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "AnnotatedTree",
    "start": 91,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 104,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 108,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 109,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 111,
    "end": 112
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 113,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "AnnotatedStore",
    "start": 123,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 137,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 138,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "out",
    "start": 141,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 154,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 159,
    "end": 160
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 168,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 178,
    "end": 179
  },
  {
    "type": "Identifier",
    "value": "batch",
    "start": 179,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "AnnotatedStore",
    "start": 186,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 200,
    "end": 201
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 207,
    "end": 209
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 210,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 219,
    "end": 226
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 227,
    "end": 230
  },
  {
    "type": "Identifier",
    "value": "stringTree",
    "start": 231,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "AnnotatedTree",
    "start": 243,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 256,
    "end": 257
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 263,
    "end": 264
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 266,
    "end": 273
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 274,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "unknownTree",
    "start": 278,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "AnnotatedTree",
    "start": 291,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 305,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 315,
    "end": 322
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 323,
    "end": 326
  },
  {
    "type": "Identifier",
    "value": "stringStore",
    "start": 327,
    "end": 338
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 338,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "AnnotatedStore",
    "start": 340,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 355,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 361,
    "end": 362
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 362,
    "end": 363
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 364,
    "end": 371
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 372,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "unknownStore",
    "start": 376,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 388,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "AnnotatedStore",
    "start": 390,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 405,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "unknownTree",
    "start": 416,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 428,
    "end": 429
  },
  {
    "type": "Identifier",
    "value": "stringTree",
    "start": 430,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "stringTree",
    "start": 442,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "unknownTree",
    "start": 455,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 466,
    "end": 467
  },
  {
    "type": "Identifier",
    "value": "unknownStore",
    "start": 477,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "stringStore",
    "start": 492,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "stringStore",
    "start": 514,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 526,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "unknownStore",
    "start": 528,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "GenericMethod",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 35
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 36,
              "end": 37
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 36,
            "end": 37
          }
        ],
        "start": 35,
        "end": 38
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 45,
              "end": 50
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 52,
                  "end": 53
                },
                "typeArguments": null,
                "start": 52,
                "end": 53
              },
              "start": 50,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 45,
            "end": 54
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 59,
              "end": 63
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": {
                  "type": "TSTypeParameterDeclaration",
                  "params": [
                    {
                      "type": "TSTypeParameter",
                      "name": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 66,
                        "end": 67
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 66,
                      "end": 67
                    }
                  ],
                  "start": 65,
                  "end": 68
                },
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 76,
                          "end": 77
                        },
                        "typeArguments": null,
                        "start": 76,
                        "end": 77
                      },
                      "start": 74,
                      "end": 77
                    },
                    "start": 69,
                    "end": 77
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GenericMethod",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 82,
                      "end": 95
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 96,
                            "end": 97
                          },
                          "typeArguments": null,
                          "start": 96,
                          "end": 97
                        }
                      ],
                      "start": 95,
                      "end": 98
                    },
                    "start": 82,
                    "end": 98
                  },
                  "start": 79,
                  "end": 98
                },
                "start": 65,
                "end": 98
              },
              "start": 63,
              "end": 98
            },
            "accessibility": null,
            "static": false,
            "start": 59,
            "end": 99
          }
        ],
        "start": 39,
        "end": 101
      },
      "declare": false,
      "start": 12,
      "end": 101
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Projected",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 121
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 139
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnknownKeyword",
                      "start": 141,
                      "end": 148
                    },
                    "start": 139,
                    "end": 148
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 134,
                  "end": 148
                }
              ],
              "start": 132,
              "end": 150
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 122,
            "end": 150
          }
        ],
        "start": 121,
        "end": 151
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 158,
              "end": 163
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 165,
                    "end": 166
                  },
                  "typeArguments": null,
                  "start": 165,
                  "end": 166
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "value",
                    "raw": "\"value\"",
                    "start": 167,
                    "end": 174
                  },
                  "start": 167,
                  "end": 174
                },
                "start": 165,
                "end": 175
              },
              "start": 163,
              "end": 175
            },
            "accessibility": null,
            "static": false,
            "start": 158,
            "end": 176
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next",
              "optional": false,
              "typeAnnotation": null,
              "start": 181,
              "end": 185
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Projected",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 187,
                  "end": 196
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 197,
                        "end": 198
                      },
                      "typeArguments": null,
                      "start": 197,
                      "end": 198
                    }
                  ],
                  "start": 196,
                  "end": 199
                },
                "start": 187,
                "end": 199
              },
              "start": 185,
              "end": 199
            },
            "accessibility": null,
            "static": false,
            "start": 181,
            "end": 200
          }
        ],
        "start": 152,
        "end": 202
      },
      "declare": false,
      "start": 102,
      "end": 202
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Method",
        "optional": false,
        "typeAnnotation": null,
        "start": 213,
        "end": 219
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 220,
              "end": 221
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 220,
            "end": 221
          }
        ],
        "start": 219,
        "end": 222
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 234
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 236,
                  "end": 237
                },
                "typeArguments": null,
                "start": 236,
                "end": 237
              },
              "start": 234,
              "end": 237
            },
            "accessibility": null,
            "static": false,
            "start": 229,
            "end": 238
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "accept",
              "optional": false,
              "typeAnnotation": null,
              "start": 243,
              "end": 249
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Method",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 257,
                      "end": 263
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 264,
                            "end": 265
                          },
                          "typeArguments": null,
                          "start": 264,
                          "end": 265
                        }
                      ],
                      "start": 263,
                      "end": 266
                    },
                    "start": 257,
                    "end": 266
                  },
                  "start": 255,
                  "end": 266
                },
                "start": 250,
                "end": 266
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 269,
                "end": 273
              },
              "start": 267,
              "end": 273
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 243,
            "end": 274
          }
        ],
        "start": 223,
        "end": 276
      },
      "declare": false,
      "start": 203,
      "end": 276
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
            "name": "strings",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GenericMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 299,
                  "end": 312
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 313,
                      "end": 319
                    }
                  ],
                  "start": 312,
                  "end": 320
                },
                "start": 299,
                "end": 320
              },
              "start": 297,
              "end": 320
            },
            "start": 290,
            "end": 320
          },
          "init": null,
          "definite": false,
          "start": 290,
          "end": 320
        }
      ],
      "declare": true,
      "start": 278,
      "end": 321
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
            "name": "unknowns",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GenericMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 344,
                  "end": 357
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 358,
                      "end": 365
                    }
                  ],
                  "start": 357,
                  "end": 366
                },
                "start": 344,
                "end": 366
              },
              "start": 342,
              "end": 366
            },
            "start": 334,
            "end": 366
          },
          "init": null,
          "definite": false,
          "start": 334,
          "end": 366
        }
      ],
      "declare": true,
      "start": 322,
      "end": 367
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
            "name": "stringMethod",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 394,
                  "end": 400
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 401,
                      "end": 407
                    }
                  ],
                  "start": 400,
                  "end": 408
                },
                "start": 394,
                "end": 408
              },
              "start": 392,
              "end": 408
            },
            "start": 380,
            "end": 408
          },
          "init": null,
          "definite": false,
          "start": 380,
          "end": 408
        }
      ],
      "declare": true,
      "start": 368,
      "end": 409
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
            "name": "unknownMethod",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 443
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnknownKeyword",
                      "start": 444,
                      "end": 451
                    }
                  ],
                  "start": 443,
                  "end": 452
                },
                "start": 437,
                "end": 452
              },
              "start": 435,
              "end": 452
            },
            "start": 422,
            "end": 452
          },
          "init": null,
          "definite": false,
          "start": 422,
          "end": 452
        }
      ],
      "declare": true,
      "start": 410,
      "end": 453
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
            "name": "projected",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Projected",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 477,
                  "end": 486
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 489,
                            "end": 494
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 496,
                              "end": 502
                            },
                            "start": 494,
                            "end": 502
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 489,
                          "end": 503
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "extra",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 504,
                            "end": 509
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 511,
                              "end": 517
                            },
                            "start": 509,
                            "end": 517
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 504,
                          "end": 517
                        }
                      ],
                      "start": 487,
                      "end": 519
                    }
                  ],
                  "start": 486,
                  "end": 520
                },
                "start": 477,
                "end": 520
              },
              "start": 475,
              "end": 520
            },
            "start": 466,
            "end": 520
          },
          "init": null,
          "definite": false,
          "start": 466,
          "end": 520
        }
      ],
      "declare": true,
      "start": 454,
      "end": 521
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknowns",
          "optional": false,
          "typeAnnotation": null,
          "start": 523,
          "end": 531
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "strings",
          "optional": false,
          "typeAnnotation": null,
          "start": 534,
          "end": 541
        },
        "start": 523,
        "end": 541
      },
      "directive": null,
      "start": 523,
      "end": 542
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "strings",
          "optional": false,
          "typeAnnotation": null,
          "start": 543,
          "end": 550
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknowns",
          "optional": false,
          "typeAnnotation": null,
          "start": 553,
          "end": 561
        },
        "start": 543,
        "end": 561
      },
      "directive": null,
      "start": 543,
      "end": 562
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "unknownMethod",
          "optional": false,
          "typeAnnotation": null,
          "start": 572,
          "end": 585
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "stringMethod",
          "optional": false,
          "typeAnnotation": null,
          "start": 588,
          "end": 600
        },
        "start": 572,
        "end": 600
      },
      "directive": null,
      "start": 572,
      "end": 601
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
            "name": "widened",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Projected",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 626
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 629,
                            "end": 634
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 636,
                              "end": 642
                            },
                            "start": 634,
                            "end": 642
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 629,
                          "end": 642
                        }
                      ],
                      "start": 627,
                      "end": 644
                    }
                  ],
                  "start": 626,
                  "end": 645
                },
                "start": 617,
                "end": 645
              },
              "start": 615,
              "end": 645
            },
            "start": 608,
            "end": 645
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "projected",
            "optional": false,
            "typeAnnotation": null,
            "start": 648,
            "end": 657
          },
          "definite": false,
          "start": 608,
          "end": 657
        }
      ],
      "declare": false,
      "start": 602,
      "end": 658
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 658
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "export",
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
    "type": "Punctuator",
    "value": "}",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9,
    "end": 10
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 12,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "GenericMethod",
    "start": 22,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 45,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 50,
    "end": 51
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 59,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 67,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 69,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 79,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "GenericMethod",
    "start": 82,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 98,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 100,
    "end": 101
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 102,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "Projected",
    "start": 112,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 124,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 141,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 158,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 163,
    "end": 164
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 166,
    "end": 167
  },
  {
    "type": "String",
    "value": "\"value\"",
    "start": 167,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 181,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 185,
    "end": 186
  },
  {
    "type": "Identifier",
    "value": "Projected",
    "start": 187,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 197,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 203,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "Method",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 221,
    "end": 222
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 223,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 229,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 236,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "accept",
    "start": 243,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 250,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "Method",
    "start": 257,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 264,
    "end": 265
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 265,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 269,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 275,
    "end": 276
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 278,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 286,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 290,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "GenericMethod",
    "start": 299,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 313,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 322,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 330,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "unknowns",
    "start": 334,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "GenericMethod",
    "start": 344,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 358,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 365,
    "end": 366
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 366,
    "end": 367
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 368,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 376,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "stringMethod",
    "start": 380,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "Method",
    "start": 394,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 400,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 410,
    "end": 417
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 418,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "unknownMethod",
    "start": 422,
    "end": 435
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "Method",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 444,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 454,
    "end": 461
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 462,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "projected",
    "start": 466,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 475,
    "end": 476
  },
  {
    "type": "Identifier",
    "value": "Projected",
    "start": 477,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 486,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 487,
    "end": 488
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 489,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 494,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 496,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "extra",
    "start": 504,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 511,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 520,
    "end": 521
  },
  {
    "type": "Identifier",
    "value": "unknowns",
    "start": 523,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 534,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 541,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "strings",
    "start": 543,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "unknowns",
    "start": 553,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 561,
    "end": 562
  },
  {
    "type": "Identifier",
    "value": "unknownMethod",
    "start": 572,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "stringMethod",
    "start": 588,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 600,
    "end": 601
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 602,
    "end": 607
  },
  {
    "type": "Identifier",
    "value": "widened",
    "start": 608,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "Projected",
    "start": 617,
    "end": 626
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 629,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 636,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 644,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 646,
    "end": 647
  },
  {
    "type": "Identifier",
    "value": "projected",
    "start": 648,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 657,
    "end": 658
  }
]
```
