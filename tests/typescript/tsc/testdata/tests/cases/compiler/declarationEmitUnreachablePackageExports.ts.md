__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 22
        },
        "typeParameters": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 37,
                  "end": 43
                },
                "start": 35,
                "end": 43
              },
              "accessibility": null,
              "static": false,
              "start": 25,
              "end": 44
            }
          ],
          "start": 23,
          "end": 46
        },
        "declare": false,
        "start": 7,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 46
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
              "name": "create",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 87
                      },
                      "typeArguments": null,
                      "start": 82,
                      "end": 87
                    },
                    "start": 79,
                    "end": 87
                  },
                  "start": 76,
                  "end": 87
                },
                "start": 74,
                "end": 87
              },
              "start": 68,
              "end": 87
            },
            "init": null,
            "definite": false,
            "start": 68,
            "end": 87
          }
        ],
        "declare": true,
        "start": 54,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 47,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
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
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 25,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 47,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 54,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "create",
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
    "type": "Punctuator",
    "value": "(",
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
    "value": "Thing",
    "start": 82,
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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 22
        },
        "typeParameters": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 37,
                  "end": 43
                },
                "start": 35,
                "end": 43
              },
              "accessibility": null,
              "static": false,
              "start": 25,
              "end": 44
            }
          ],
          "start": 23,
          "end": 46
        },
        "declare": false,
        "start": 7,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 46
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
              "name": "create",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 87
                      },
                      "typeArguments": null,
                      "start": 82,
                      "end": 87
                    },
                    "start": 79,
                    "end": 87
                  },
                  "start": 76,
                  "end": 87
                },
                "start": 74,
                "end": 87
              },
              "start": 68,
              "end": 87
            },
            "init": null,
            "definite": false,
            "start": 68,
            "end": 87
          }
        ],
        "declare": true,
        "start": 54,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 47,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
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
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 25,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 47,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 54,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "create",
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
    "type": "Punctuator",
    "value": "(",
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
    "value": "Thing",
    "start": 82,
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
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 22
        },
        "typeParameters": null,
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
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 34,
                "end": 35
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 37,
                  "end": 43
                },
                "start": 35,
                "end": 43
              },
              "accessibility": null,
              "static": false,
              "start": 25,
              "end": 44
            }
          ],
          "start": 23,
          "end": 46
        },
        "declare": false,
        "start": 7,
        "end": 46
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 46
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
              "name": "create",
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 87
                      },
                      "typeArguments": null,
                      "start": 82,
                      "end": 87
                    },
                    "start": 79,
                    "end": 87
                  },
                  "start": 76,
                  "end": 87
                },
                "start": 74,
                "end": 87
              },
              "start": 68,
              "end": 87
            },
            "init": null,
            "definite": false,
            "start": 68,
            "end": 87
          }
        ],
        "declare": true,
        "start": 54,
        "end": 88
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 47,
      "end": 88
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
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
    "type": "Keyword",
    "value": "interface",
    "start": 7,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "Thing",
    "start": 17,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 25,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 43,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 47,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 54,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "create",
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
    "type": "Punctuator",
    "value": "(",
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
    "value": "Thing",
    "start": 82,
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
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 15
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createRoot",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 29
          },
          "importKind": "value",
          "start": 9,
          "end": 29
        }
      ],
      "source": {
        "type": "Literal",
        "value": "c-root",
        "raw": "\"c-root\"",
        "start": 37,
        "end": 45
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 46
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null,
            "start": 56,
            "end": 62
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createSubpath",
            "optional": false,
            "typeAnnotation": null,
            "start": 66,
            "end": 79
          },
          "importKind": "value",
          "start": 56,
          "end": 79
        }
      ],
      "source": {
        "type": "Literal",
        "value": "c-subpath/Thing",
        "raw": "\"c-subpath/Thing\"",
        "start": 87,
        "end": 104
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 47,
      "end": 105
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "create",
            "optional": false,
            "typeAnnotation": null,
            "start": 115,
            "end": 121
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "createPattern",
            "optional": false,
            "typeAnnotation": null,
            "start": 125,
            "end": 138
          },
          "importKind": "value",
          "start": 115,
          "end": 138
        }
      ],
      "source": {
        "type": "Literal",
        "value": "c-pattern/Thing",
        "raw": "\"c-pattern/Thing\"",
        "start": 146,
        "end": 163
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 106,
      "end": 164
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
              "name": "root",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReturnType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 192,
                    "end": 202
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createRoot",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 210,
                          "end": 220
                        },
                        "typeArguments": null,
                        "start": 203,
                        "end": 220
                      }
                    ],
                    "start": 202,
                    "end": 221
                  },
                  "start": 192,
                  "end": 221
                },
                "start": 190,
                "end": 221
              },
              "start": 186,
              "end": 221
            },
            "init": null,
            "definite": false,
            "start": 186,
            "end": 221
          }
        ],
        "declare": true,
        "start": 172,
        "end": 222
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 165,
      "end": 222
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
              "name": "subpath",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReturnType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 253,
                    "end": 263
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createSubpath",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 271,
                          "end": 284
                        },
                        "typeArguments": null,
                        "start": 264,
                        "end": 284
                      }
                    ],
                    "start": 263,
                    "end": 285
                  },
                  "start": 253,
                  "end": 285
                },
                "start": 251,
                "end": 285
              },
              "start": 244,
              "end": 285
            },
            "init": null,
            "definite": false,
            "start": 244,
            "end": 285
          }
        ],
        "declare": true,
        "start": 230,
        "end": 286
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 223,
      "end": 286
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
              "name": "pattern",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ReturnType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 317,
                    "end": 327
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "createPattern",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 335,
                          "end": 348
                        },
                        "typeArguments": null,
                        "start": 328,
                        "end": 348
                      }
                    ],
                    "start": 327,
                    "end": 349
                  },
                  "start": 317,
                  "end": 349
                },
                "start": 315,
                "end": 349
              },
              "start": 308,
              "end": 349
            },
            "init": null,
            "definite": false,
            "start": 308,
            "end": 349
          }
        ],
        "declare": true,
        "start": 294,
        "end": 350
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 287,
      "end": 350
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 351
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
    "value": "create",
    "start": 9,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 16,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "createRoot",
    "start": 19,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 32,
    "end": 36
  },
  {
    "type": "String",
    "value": "\"c-root\"",
    "start": 37,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 47,
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
    "value": "create",
    "start": 56,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 63,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "createSubpath",
    "start": 66,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 80,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 82,
    "end": 86
  },
  {
    "type": "String",
    "value": "\"c-subpath/Thing\"",
    "start": 87,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 106,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "create",
    "start": 115,
    "end": 121
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 122,
    "end": 124
  },
  {
    "type": "Identifier",
    "value": "createPattern",
    "start": 125,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 141,
    "end": 145
  },
  {
    "type": "String",
    "value": "\"c-pattern/Thing\"",
    "start": 146,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 165,
    "end": 171
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 172,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 180,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 186,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "ReturnType",
    "start": 192,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 202,
    "end": 203
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 203,
    "end": 209
  },
  {
    "type": "Identifier",
    "value": "createRoot",
    "start": 210,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 223,
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
    "value": "const",
    "start": 238,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "subpath",
    "start": 244,
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
    "value": "ReturnType",
    "start": 253,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 264,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "createSubpath",
    "start": 271,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 284,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 287,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 294,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 302,
    "end": 307
  },
  {
    "type": "Identifier",
    "value": "pattern",
    "start": 308,
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
    "value": "ReturnType",
    "start": 317,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 328,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "createPattern",
    "start": 335,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350
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
            "name": "root",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "root",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "subpath",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 22
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "subpath",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 22
          },
          "importKind": "value",
          "start": 15,
          "end": 22
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "pattern",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 31
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "pattern",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 31
          },
          "importKind": "value",
          "start": 24,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "s",
        "raw": "\"s\"",
        "start": 39,
        "end": 42
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 43
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
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 62
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "root",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 71
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "root",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 71
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 67,
                  "end": 71
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "subpath",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 80
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "subpath",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 73,
                    "end": 80
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 73,
                  "end": 80
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pattern",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 89
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pattern",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 89
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 82,
                  "end": 89
                }
              ],
              "start": 65,
              "end": 91
            },
            "definite": false,
            "start": 57,
            "end": 91
          }
        ],
        "declare": false,
        "start": 51,
        "end": 92
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 44,
      "end": 92
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 93
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
    "value": "root",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "subpath",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "pattern",
    "start": 24,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 34,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"s\"",
    "start": 39,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 44,
    "end": 50
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 51,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 67,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "subpath",
    "start": 73,
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
    "value": "pattern",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 91,
    "end": 92
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
            "name": "root",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "root",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 13
          },
          "importKind": "value",
          "start": 9,
          "end": 13
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "subpath",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 22
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "subpath",
            "optional": false,
            "typeAnnotation": null,
            "start": 15,
            "end": 22
          },
          "importKind": "value",
          "start": 15,
          "end": 22
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "pattern",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 31
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "pattern",
            "optional": false,
            "typeAnnotation": null,
            "start": 24,
            "end": 31
          },
          "importKind": "value",
          "start": 24,
          "end": 31
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./index.js",
        "raw": "\"./index.js\"",
        "start": 39,
        "end": 51
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 52
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
              "name": "thing",
              "optional": false,
              "typeAnnotation": null,
              "start": 66,
              "end": 71
            },
            "init": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "root",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 80
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "root",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 80
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 76,
                  "end": 80
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "subpath",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 89
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "subpath",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 82,
                    "end": 89
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 82,
                  "end": 89
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pattern",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 98
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "pattern",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 91,
                    "end": 98
                  },
                  "method": false,
                  "shorthand": true,
                  "computed": false,
                  "optional": false,
                  "start": 91,
                  "end": 98
                }
              ],
              "start": 74,
              "end": 100
            },
            "definite": false,
            "start": 66,
            "end": 100
          }
        ],
        "declare": false,
        "start": 60,
        "end": 101
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 53,
      "end": 101
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 102
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
    "value": "root",
    "start": 9,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "subpath",
    "start": 15,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 22,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "pattern",
    "start": 24,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 34,
    "end": 38
  },
  {
    "type": "String",
    "value": "\"./index.js\"",
    "start": 39,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 53,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 60,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "thing",
    "start": 66,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "root",
    "start": 76,
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
    "value": "subpath",
    "start": 82,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 89,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "pattern",
    "start": 91,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  }
]
```
