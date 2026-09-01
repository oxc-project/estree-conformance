__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNeverKeyword",
                      "start": 17,
                      "end": 22
                    },
                    "start": 17,
                    "end": 24
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 27,
                      "end": 33
                    },
                    "start": 27,
                    "end": 35
                  }
                ],
                "start": 17,
                "end": 35
              },
              "start": 15,
              "end": 35
            },
            "start": 14,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 36
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "yThen",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 55
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 59
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 60,
                  "end": 63
                },
                "optional": false,
                "computed": false,
                "start": 58,
                "end": 63
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 64,
                      "end": 68
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 72,
                      "end": 76
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 77,
                      "end": 83
                    },
                    "optional": false,
                    "computed": false,
                    "start": 72,
                    "end": 83
                  },
                  "id": null,
                  "generator": false,
                  "start": 64,
                  "end": 83
                }
              ],
              "optional": false,
              "start": 58,
              "end": 84
            },
            "definite": false,
            "start": 50,
            "end": 84
          }
        ],
        "declare": false,
        "start": 44,
        "end": 85
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 37,
      "end": 85
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 85
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 27,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 35,
    "end": 36
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 37,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 44,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "yThen",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 60,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 64,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 69,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
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
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSNumberKeyword",
                        "start": 17,
                        "end": 23
                      },
                      "start": 17,
                      "end": 25
                    },
                    "start": 17,
                    "end": 27
                  },
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 30,
                      "end": 36
                    },
                    "start": 30,
                    "end": 38
                  }
                ],
                "start": 17,
                "end": 38
              },
              "start": 15,
              "end": 38
            },
            "start": 14,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 38
        }
      ],
      "declare": true,
      "start": 0,
      "end": 39
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "yThen",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 58
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 61,
                  "end": 62
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "map",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 63,
                  "end": 66
                },
                "optional": false,
                "computed": false,
                "start": 61,
                "end": 66
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 67,
                      "end": 71
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 79
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 80,
                      "end": 86
                    },
                    "optional": false,
                    "computed": false,
                    "start": 75,
                    "end": 86
                  },
                  "id": null,
                  "generator": false,
                  "start": 67,
                  "end": 86
                }
              ],
              "optional": false,
              "start": 61,
              "end": 87
            },
            "definite": false,
            "start": 53,
            "end": 87
          }
        ],
        "declare": false,
        "start": 47,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 40,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 88
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 17,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 23,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 30,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 36,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 40,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 47,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "yThen",
    "start": 53,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 61,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 62,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 63,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 72,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "item",
    "start": 75,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 80,
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
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResizeObserverCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 20,
        "end": 42
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ResizeObserverEntry",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 59,
                        "end": 78
                      },
                      "typeArguments": null,
                      "start": 59,
                      "end": 78
                    },
                    "start": 59,
                    "end": 80
                  },
                  "start": 57,
                  "end": 80
                },
                "start": 50,
                "end": 80
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "observer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ResizeObserver",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 92,
                      "end": 106
                    },
                    "typeArguments": null,
                    "start": 92,
                    "end": 106
                  },
                  "start": 90,
                  "end": 106
                },
                "start": 82,
                "end": 106
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 109,
                "end": 113
              },
              "start": 107,
              "end": 113
            },
            "start": 49,
            "end": 114
          }
        ],
        "start": 43,
        "end": 116
      },
      "declare": false,
      "start": 10,
      "end": 116
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ResizeObserverCallback",
        "optional": false,
        "typeAnnotation": null,
        "start": 127,
        "end": 149
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "ResizeObserverEntry",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 190,
                        "end": 209
                      },
                      "typeArguments": null,
                      "start": 190,
                      "end": 209
                    },
                    "start": 190,
                    "end": 211
                  },
                  "start": 188,
                  "end": 211
                },
                "start": 181,
                "end": 211
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "observer",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ResizeObserver",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 237
                    },
                    "typeArguments": null,
                    "start": 223,
                    "end": 237
                  },
                  "start": 221,
                  "end": 237
                },
                "start": 213,
                "end": 237
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 240,
                "end": 244
              },
              "start": 238,
              "end": 244
            },
            "start": 180,
            "end": 245
          }
        ],
        "start": 150,
        "end": 247
      },
      "declare": false,
      "start": 117,
      "end": 247
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
            "name": "resizeObserver",
            "optional": false,
            "typeAnnotation": null,
            "start": 255,
            "end": 269
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "ResizeObserver",
              "optional": false,
              "typeAnnotation": null,
              "start": 276,
              "end": 290
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "ArrayPattern",
                    "decorators": [],
                    "elements": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "entry",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 293,
                        "end": 298
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 292,
                    "end": 299
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "entry",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 310,
                        "end": 315
                      },
                      "directive": null,
                      "start": 310,
                      "end": 315
                    }
                  ],
                  "start": 304,
                  "end": 317
                },
                "id": null,
                "generator": false,
                "start": 291,
                "end": 317
              }
            ],
            "start": 272,
            "end": 318
          },
          "definite": false,
          "start": 255,
          "end": 318
        }
      ],
      "declare": false,
      "start": 249,
      "end": 319
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Callback",
        "optional": false,
        "typeAnnotation": null,
        "start": 351,
        "end": 359
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
              "start": 360,
              "end": 361
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 360,
            "end": 361
          }
        ],
        "start": 359,
        "end": 362
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 377,
                    "end": 381
                  },
                  "start": 375,
                  "end": 381
                },
                "start": 370,
                "end": 381
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
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
                      "start": 391,
                      "end": 392
                    },
                    "typeArguments": null,
                    "start": 391,
                    "end": 392
                  },
                  "start": 389,
                  "end": 392
                },
                "start": 383,
                "end": 392
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 395,
                "end": 402
              },
              "start": 393,
              "end": 402
            },
            "start": 369,
            "end": 402
          },
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Error",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 415,
                      "end": 420
                    },
                    "typeArguments": null,
                    "start": 415,
                    "end": 420
                  },
                  "start": 413,
                  "end": 420
                },
                "start": 408,
                "end": 420
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "result",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNullKeyword",
                    "start": 430,
                    "end": 434
                  },
                  "start": 428,
                  "end": 434
                },
                "start": 422,
                "end": 434
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 437,
                "end": 444
              },
              "start": 435,
              "end": 444
            },
            "start": 407,
            "end": 444
          }
        ],
        "start": 363,
        "end": 446
      },
      "declare": false,
      "start": 341,
      "end": 446
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Task",
        "optional": false,
        "typeAnnotation": null,
        "start": 458,
        "end": 462
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
              "start": 463,
              "end": 464
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 463,
            "end": 464
          }
        ],
        "start": 462,
        "end": 465
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callback",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Callback",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 483,
                      "end": 491
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
                            "start": 492,
                            "end": 493
                          },
                          "typeArguments": null,
                          "start": 492,
                          "end": 493
                        }
                      ],
                      "start": 491,
                      "end": 494
                    },
                    "start": 483,
                    "end": 494
                  },
                  "start": 481,
                  "end": 494
                },
                "start": 473,
                "end": 494
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 497,
                "end": 504
              },
              "start": 495,
              "end": 504
            },
            "start": 472,
            "end": 504
          }
        ],
        "start": 466,
        "end": 506
      },
      "declare": false,
      "start": 448,
      "end": 506
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "series",
          "optional": false,
          "typeAnnotation": null,
          "start": 524,
          "end": 530
        },
        "generator": false,
        "async": false,
        "declare": false,
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
                "start": 531,
                "end": 532
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 531,
              "end": 532
            }
          ],
          "start": 530,
          "end": 533
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "tasks",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Task",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 541,
                    "end": 545
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
                          "start": 546,
                          "end": 547
                        },
                        "typeArguments": null,
                        "start": 546,
                        "end": 547
                      }
                    ],
                    "start": 545,
                    "end": 548
                  },
                  "start": 541,
                  "end": 548
                },
                "start": 541,
                "end": 550
              },
              "start": 539,
              "end": 550
            },
            "start": 534,
            "end": 550
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "callback",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Callback",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 562,
                  "end": 570
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
                          "start": 571,
                          "end": 572
                        },
                        "typeArguments": null,
                        "start": 571,
                        "end": 572
                      },
                      "start": 571,
                      "end": 574
                    }
                  ],
                  "start": 570,
                  "end": 575
                },
                "start": 562,
                "end": 575
              },
              "start": 560,
              "end": 575
            },
            "start": 552,
            "end": 575
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 578,
            "end": 582
          },
          "start": 576,
          "end": 582
        },
        "body": {
          "type": "BlockStatement",
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
                    "name": "index",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 593,
                    "end": 598
                  },
                  "init": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 601,
                    "end": 602
                  },
                  "definite": false,
                  "start": 593,
                  "end": 602
                }
              ],
              "declare": false,
              "start": 589,
              "end": 602
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
                    "name": "results",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 620,
                            "end": 621
                          },
                          "typeArguments": null,
                          "start": 620,
                          "end": 621
                        },
                        "start": 620,
                        "end": 623
                      },
                      "start": 618,
                      "end": 623
                    },
                    "start": 611,
                    "end": 623
                  },
                  "init": {
                    "type": "ArrayExpression",
                    "elements": [],
                    "start": 626,
                    "end": 628
                  },
                  "definite": false,
                  "start": 611,
                  "end": 628
                }
              ],
              "declare": false,
              "start": 607,
              "end": 628
            },
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 643,
                "end": 647
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
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
                          "name": "task",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 664,
                          "end": 668
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "tasks",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 671,
                            "end": 676
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "index",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 677,
                            "end": 682
                          },
                          "optional": false,
                          "computed": true,
                          "start": 671,
                          "end": 683
                        },
                        "definite": false,
                        "start": 664,
                        "end": 683
                      }
                    ],
                    "declare": false,
                    "start": 660,
                    "end": 683
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "task",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 697,
                        "end": 701
                      },
                      "prefix": true,
                      "start": 696,
                      "end": 701
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "callback",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 717,
                              "end": 725
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "value": null,
                                "raw": "null",
                                "start": 726,
                                "end": 730
                              },
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "results",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 732,
                                "end": 739
                              }
                            ],
                            "optional": false,
                            "start": 717,
                            "end": 740
                          },
                          "directive": null,
                          "start": 717,
                          "end": 740
                        }
                      ],
                      "start": 703,
                      "end": 750
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "task",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 770,
                              "end": 774
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "ArrowFunctionExpression",
                                "expression": false,
                                "async": false,
                                "typeParameters": null,
                                "params": [
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "error",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 776,
                                    "end": 781
                                  },
                                  {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "result",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 783,
                                    "end": 789
                                  }
                                ],
                                "returnType": null,
                                "body": {
                                  "type": "BlockStatement",
                                  "body": [
                                    {
                                      "type": "IfStatement",
                                      "test": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "error",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 816,
                                        "end": 821
                                      },
                                      "consequent": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "callback",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 845,
                                                "end": 853
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "error",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 854,
                                                  "end": 859
                                                },
                                                {
                                                  "type": "Literal",
                                                  "value": null,
                                                  "raw": "null",
                                                  "start": 861,
                                                  "end": 865
                                                }
                                              ],
                                              "optional": false,
                                              "start": 845,
                                              "end": 866
                                            },
                                            "directive": null,
                                            "start": 845,
                                            "end": 866
                                          }
                                        ],
                                        "start": 823,
                                        "end": 884
                                      },
                                      "alternate": {
                                        "type": "BlockStatement",
                                        "body": [
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "MemberExpression",
                                                "object": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "results",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1070,
                                                  "end": 1077
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "push",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1078,
                                                  "end": 1082
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 1070,
                                                "end": 1082
                                              },
                                              "typeArguments": null,
                                              "arguments": [
                                                {
                                                  "type": "TSNonNullExpression",
                                                  "expression": {
                                                    "type": "Identifier",
                                                    "decorators": [],
                                                    "name": "result",
                                                    "optional": false,
                                                    "typeAnnotation": null,
                                                    "start": 1083,
                                                    "end": 1089
                                                  },
                                                  "start": 1083,
                                                  "end": 1090
                                                }
                                              ],
                                              "optional": false,
                                              "start": 1070,
                                              "end": 1091
                                            },
                                            "directive": null,
                                            "start": 1070,
                                            "end": 1091
                                          },
                                          {
                                            "type": "ExpressionStatement",
                                            "expression": {
                                              "type": "CallExpression",
                                              "callee": {
                                                "type": "Identifier",
                                                "decorators": [],
                                                "name": "next",
                                                "optional": false,
                                                "typeAnnotation": null,
                                                "start": 1112,
                                                "end": 1116
                                              },
                                              "typeArguments": null,
                                              "arguments": [],
                                              "optional": false,
                                              "start": 1112,
                                              "end": 1118
                                            },
                                            "directive": null,
                                            "start": 1112,
                                            "end": 1118
                                          }
                                        ],
                                        "start": 890,
                                        "end": 1136
                                      },
                                      "start": 812,
                                      "end": 1136
                                    }
                                  ],
                                  "start": 794,
                                  "end": 1150
                                },
                                "id": null,
                                "generator": false,
                                "start": 775,
                                "end": 1150
                              }
                            ],
                            "optional": false,
                            "start": 770,
                            "end": 1151
                          },
                          "directive": null,
                          "start": 770,
                          "end": 1151
                        }
                      ],
                      "start": 756,
                      "end": 1161
                    },
                    "start": 692,
                    "end": 1161
                  }
                ],
                "start": 650,
                "end": 1167
              },
              "expression": false,
              "start": 634,
              "end": 1167
            },
            {
              "type": "ExpressionStatement",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "next",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1172,
                  "end": 1176
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1172,
                "end": 1178
              },
              "directive": null,
              "start": 1172,
              "end": 1178
            }
          ],
          "start": 583,
          "end": 1180
        },
        "expression": false,
        "start": 515,
        "end": 1180
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 508,
      "end": 1180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "series",
          "optional": false,
          "typeAnnotation": null,
          "start": 1182,
          "end": 1188
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1195,
                    "end": 1197
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setTimeout",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1201,
                    "end": 1211
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1218,
                          "end": 1220
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 1221,
                            "end": 1225
                          },
                          {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1227,
                            "end": 1228
                          }
                        ],
                        "optional": false,
                        "start": 1218,
                        "end": 1229
                      },
                      "id": null,
                      "generator": false,
                      "start": 1212,
                      "end": 1229
                    },
                    {
                      "type": "Literal",
                      "value": 300,
                      "raw": "300",
                      "start": 1231,
                      "end": 1234
                    }
                  ],
                  "optional": false,
                  "start": 1201,
                  "end": 1235
                },
                "id": null,
                "generator": false,
                "start": 1195,
                "end": 1235
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1241,
                    "end": 1243
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setTimeout",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1247,
                    "end": 1257
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1264,
                          "end": 1266
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 1267,
                            "end": 1271
                          },
                          {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1273,
                            "end": 1274
                          }
                        ],
                        "optional": false,
                        "start": 1264,
                        "end": 1275
                      },
                      "id": null,
                      "generator": false,
                      "start": 1258,
                      "end": 1275
                    },
                    {
                      "type": "Literal",
                      "value": 200,
                      "raw": "200",
                      "start": 1277,
                      "end": 1280
                    }
                  ],
                  "optional": false,
                  "start": 1247,
                  "end": 1281
                },
                "id": null,
                "generator": false,
                "start": 1241,
                "end": 1281
              },
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1287,
                    "end": 1289
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "setTimeout",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1293,
                    "end": 1303
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "cb",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1310,
                          "end": 1312
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": null,
                            "raw": "null",
                            "start": 1313,
                            "end": 1317
                          },
                          {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 1319,
                            "end": 1320
                          }
                        ],
                        "optional": false,
                        "start": 1310,
                        "end": 1321
                      },
                      "id": null,
                      "generator": false,
                      "start": 1304,
                      "end": 1321
                    },
                    {
                      "type": "Literal",
                      "value": 100,
                      "raw": "100",
                      "start": 1323,
                      "end": 1326
                    }
                  ],
                  "optional": false,
                  "start": 1293,
                  "end": 1327
                },
                "id": null,
                "generator": false,
                "start": 1287,
                "end": 1327
              }
            ],
            "start": 1189,
            "end": 1330
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "error",
                "optional": false,
                "typeAnnotation": null,
                "start": 1333,
                "end": 1338
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "results",
                "optional": false,
                "typeAnnotation": null,
                "start": 1340,
                "end": 1347
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "error",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1362,
                    "end": 1367
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1379,
                              "end": 1386
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1387,
                              "end": 1392
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1379,
                            "end": 1392
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "error",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1393,
                              "end": 1398
                            }
                          ],
                          "optional": false,
                          "start": 1379,
                          "end": 1399
                        },
                        "directive": null,
                        "start": 1379,
                        "end": 1399
                      }
                    ],
                    "start": 1369,
                    "end": 1405
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "console",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1421,
                              "end": 1428
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "log",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1429,
                              "end": 1432
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1421,
                            "end": 1432
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "results",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1433,
                              "end": 1440
                            }
                          ],
                          "optional": false,
                          "start": 1421,
                          "end": 1441
                        },
                        "directive": null,
                        "start": 1421,
                        "end": 1441
                      }
                    ],
                    "start": 1411,
                    "end": 1447
                  },
                  "start": 1358,
                  "end": 1447
                }
              ],
              "start": 1352,
              "end": 1449
            },
            "id": null,
            "generator": false,
            "start": 1332,
            "end": 1449
          }
        ],
        "optional": false,
        "start": 1182,
        "end": 1450
      },
      "directive": null,
      "start": 1182,
      "end": 1450
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 10,
  "end": 1450
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 10,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "ResizeObserverCallback",
    "start": 20,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 50,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "ResizeObserverEntry",
    "start": 59,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 79,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "observer",
    "start": 82,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "ResizeObserver",
    "start": 92,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 109,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 117,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "ResizeObserverCallback",
    "start": 127,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 150,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 181,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "ResizeObserverEntry",
    "start": 190,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 209,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 210,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "observer",
    "start": 213,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 221,
    "end": 222
  },
  {
    "type": "Identifier",
    "value": "ResizeObserver",
    "start": 223,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 237,
    "end": 238
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 238,
    "end": 239
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 240,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 246,
    "end": 247
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 249,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "resizeObserver",
    "start": 255,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 270,
    "end": 271
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 272,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "ResizeObserver",
    "start": 276,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 293,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 301,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "entry",
    "start": 310,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 316,
    "end": 317
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 317,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 318,
    "end": 319
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 341,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 351,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 359,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 360,
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
    "value": "{",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 370,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 375,
    "end": 376
  },
  {
    "type": "Null",
    "value": "null",
    "start": 377,
    "end": 381
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 381,
    "end": 382
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 392,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 393,
    "end": 394
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 395,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 408,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 413,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 415,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 422,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Null",
    "value": "null",
    "start": 430,
    "end": 434
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 434,
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
    "value": "unknown",
    "start": 437,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 445,
    "end": 446
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 448,
    "end": 457
  },
  {
    "type": "Identifier",
    "value": "Task",
    "start": 458,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 463,
    "end": 464
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 472,
    "end": 473
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 473,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 483,
    "end": 491
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 491,
    "end": 492
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 493,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 495,
    "end": 496
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 497,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 505,
    "end": 506
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 508,
    "end": 514
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 515,
    "end": 523
  },
  {
    "type": "Identifier",
    "value": "series",
    "start": 524,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 531,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 532,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 533,
    "end": 534
  },
  {
    "type": "Identifier",
    "value": "tasks",
    "start": 534,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 539,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "Task",
    "start": 541,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 546,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 550,
    "end": 551
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 552,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "Callback",
    "start": 562,
    "end": 570
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 570,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 572,
    "end": 573
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 573,
    "end": 574
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 574,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 575,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 576,
    "end": 577
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 578,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 589,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 593,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 599,
    "end": 600
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 601,
    "end": 602
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 607,
    "end": 610
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 611,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 624,
    "end": 625
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 626,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 634,
    "end": 642
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 643,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 660,
    "end": 663
  },
  {
    "type": "Identifier",
    "value": "task",
    "start": 664,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 669,
    "end": 670
  },
  {
    "type": "Identifier",
    "value": "tasks",
    "start": 671,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "index",
    "start": 677,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 692,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 696,
    "end": 697
  },
  {
    "type": "Identifier",
    "value": "task",
    "start": 697,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 701,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 717,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 725,
    "end": 726
  },
  {
    "type": "Null",
    "value": "null",
    "start": 726,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 730,
    "end": 731
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 732,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 739,
    "end": 740
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 749,
    "end": 750
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 751,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 756,
    "end": 757
  },
  {
    "type": "Identifier",
    "value": "task",
    "start": 770,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 776,
    "end": 781
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 781,
    "end": 782
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 783,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 791,
    "end": 793
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 794,
    "end": 795
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 812,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 816,
    "end": 821
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 823,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 845,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 853,
    "end": 854
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 854,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 859,
    "end": 860
  },
  {
    "type": "Null",
    "value": "null",
    "start": 861,
    "end": 865
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 865,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 883,
    "end": 884
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 885,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 890,
    "end": 891
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 1070,
    "end": 1077
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1077,
    "end": 1078
  },
  {
    "type": "Identifier",
    "value": "push",
    "start": 1078,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "result",
    "start": 1083,
    "end": 1089
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1090,
    "end": 1091
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1112,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1135,
    "end": 1136
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1150,
    "end": 1151
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1166,
    "end": 1167
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 1172,
    "end": 1176
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1176,
    "end": 1177
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1177,
    "end": 1178
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1179,
    "end": 1180
  },
  {
    "type": "Identifier",
    "value": "series",
    "start": 1182,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1188,
    "end": 1189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1189,
    "end": 1190
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1195,
    "end": 1197
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1198,
    "end": 1200
  },
  {
    "type": "Identifier",
    "value": "setTimeout",
    "start": 1201,
    "end": 1211
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1211,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1212,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1215,
    "end": 1217
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1218,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1221,
    "end": 1225
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1225,
    "end": 1226
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1227,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Numeric",
    "value": "300",
    "start": 1231,
    "end": 1234
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1234,
    "end": 1235
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1235,
    "end": 1236
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1241,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1244,
    "end": 1246
  },
  {
    "type": "Identifier",
    "value": "setTimeout",
    "start": 1247,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1258,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1261,
    "end": 1263
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1264,
    "end": 1266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1266,
    "end": 1267
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1267,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Numeric",
    "value": "200",
    "start": 1277,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1287,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1290,
    "end": 1292
  },
  {
    "type": "Identifier",
    "value": "setTimeout",
    "start": 1293,
    "end": 1303
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1303,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1305,
    "end": 1306
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1307,
    "end": 1309
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 1310,
    "end": 1312
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1312,
    "end": 1313
  },
  {
    "type": "Null",
    "value": "null",
    "start": 1313,
    "end": 1317
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1319,
    "end": 1320
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1321,
    "end": 1322
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 1323,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1326,
    "end": 1327
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1329,
    "end": 1330
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1330,
    "end": 1331
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1332,
    "end": 1333
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1333,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 1340,
    "end": 1347
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1347,
    "end": 1348
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1349,
    "end": 1351
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1352,
    "end": 1353
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1358,
    "end": 1360
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1361,
    "end": 1362
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1362,
    "end": 1367
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1367,
    "end": 1368
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1369,
    "end": 1370
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1379,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1387,
    "end": 1392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1392,
    "end": 1393
  },
  {
    "type": "Identifier",
    "value": "error",
    "start": 1393,
    "end": 1398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1398,
    "end": 1399
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 1406,
    "end": 1410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1411,
    "end": 1412
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 1421,
    "end": 1428
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 1429,
    "end": 1432
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1432,
    "end": 1433
  },
  {
    "type": "Identifier",
    "value": "results",
    "start": 1433,
    "end": 1440
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1440,
    "end": 1441
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1446,
    "end": 1447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1448,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1449,
    "end": 1450
  }
]
```
