__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Other",
          "optional": false,
          "typeAnnotation": null,
          "start": 20,
          "end": 25
        },
        "typeParameters": null,
        "typeAnnotation": {
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
                "name": "other",
                "optional": false,
                "typeAnnotation": null,
                "start": 30,
                "end": 35
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 37,
                  "end": 43
                },
                "start": 35,
                "end": 43
              },
              "accessibility": null,
              "static": false,
              "start": 30,
              "end": 43
            }
          ],
          "start": 28,
          "end": 45
        },
        "declare": true,
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
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "SomeType",
          "optional": false,
          "typeAnnotation": null,
          "start": 67,
          "end": 75
        },
        "typeParameters": null,
        "typeAnnotation": {
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
                "name": "arg",
                "optional": false,
                "typeAnnotation": null,
                "start": 80,
                "end": 83
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Other",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 85,
                    "end": 90
                  },
                  "typeArguments": null,
                  "start": 85,
                  "end": 90
                },
                "start": 83,
                "end": 90
              },
              "accessibility": null,
              "static": false,
              "start": 80,
              "end": 90
            }
          ],
          "start": 78,
          "end": 92
        },
        "declare": true,
        "start": 54,
        "end": 93
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 47,
      "end": 93
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
    "value": "export",
    "start": 0,
    "end": 6
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 15,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 20,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 26,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "other",
    "start": 30,
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
    "value": "string",
    "start": 37,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "type",
    "start": 62,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "SomeType",
    "start": 67,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 80,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 92,
    "end": 93
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
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "shouldLookupName",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 46,
                    "end": 52
                  },
                  "start": 39,
                  "end": 52
                },
                "start": 37,
                "end": 52
              },
              "start": 21,
              "end": 52
            },
            "init": null,
            "definite": false,
            "start": 21,
            "end": 52
          }
        ],
        "declare": true,
        "start": 7,
        "end": 53
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 53
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
              "name": "shouldReuseLocalName",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 104,
                    "end": 110
                  },
                  "start": 97,
                  "end": 110
                },
                "start": 95,
                "end": 110
              },
              "start": 75,
              "end": 110
            },
            "init": null,
            "definite": false,
            "start": 75,
            "end": 110
          }
        ],
        "declare": true,
        "start": 61,
        "end": 111
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 54,
      "end": 111
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
              "name": "reuseDepName",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 154,
                    "end": 160
                  },
                  "start": 147,
                  "end": 160
                },
                "start": 145,
                "end": 160
              },
              "start": 133,
              "end": 160
            },
            "init": null,
            "definite": false,
            "start": 133,
            "end": 160
          }
        ],
        "declare": true,
        "start": 119,
        "end": 161
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 112,
      "end": 161
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
              "name": "shouldBeElided",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 206,
                    "end": 212
                  },
                  "start": 199,
                  "end": 212
                },
                "start": 197,
                "end": 212
              },
              "start": 183,
              "end": 212
            },
            "init": null,
            "definite": false,
            "start": 183,
            "end": 212
          }
        ],
        "declare": true,
        "start": 169,
        "end": 213
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 162,
      "end": 213
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
              "name": "isNotAccessibleShouldError",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeOperator",
                  "operator": "unique",
                  "typeAnnotation": {
                    "type": "TSSymbolKeyword",
                    "start": 270,
                    "end": 276
                  },
                  "start": 263,
                  "end": 276
                },
                "start": 261,
                "end": 276
              },
              "start": 235,
              "end": 276
            },
            "init": null,
            "definite": false,
            "start": 235,
            "end": 276
          }
        ],
        "declare": true,
        "start": 221,
        "end": 277
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 214,
      "end": 277
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 278
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
    "type": "Identifier",
    "value": "declare",
    "start": 7,
    "end": 14
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "shouldLookupName",
    "start": 21,
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
    "value": "unique",
    "start": 39,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 46,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 54,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 61,
    "end": 68
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 69,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "shouldReuseLocalName",
    "start": 75,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 97,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 112,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 119,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 127,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "reuseDepName",
    "start": 133,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 145,
    "end": 146
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 147,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 154,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 162,
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
    "value": "const",
    "start": 177,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "shouldBeElided",
    "start": 183,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 199,
    "end": 205
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 212,
    "end": 213
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 214,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 221,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 229,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "isNotAccessibleShouldError",
    "start": 235,
    "end": 261
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 261,
    "end": 262
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 263,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 270,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 276,
    "end": 277
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
            "name": "Other",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Other",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 14
          },
          "importKind": "value",
          "start": 9,
          "end": 14
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./inner",
        "raw": "'./inner'",
        "start": 22,
        "end": 31
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 31
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldLookupName",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 57
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldLookupName",
            "optional": false,
            "typeAnnotation": null,
            "start": 41,
            "end": 57
          },
          "importKind": "value",
          "start": 41,
          "end": 57
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "reuseDepName",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 71
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "reuseDepName",
            "optional": false,
            "typeAnnotation": null,
            "start": 59,
            "end": 71
          },
          "importKind": "value",
          "start": 59,
          "end": 71
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 93
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null,
            "start": 73,
            "end": 93
          },
          "importKind": "value",
          "start": 73,
          "end": 93
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 109
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null,
            "start": 95,
            "end": 109
          },
          "importKind": "value",
          "start": 95,
          "end": 109
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other",
        "raw": "'./other'",
        "start": 117,
        "end": 126
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 32,
      "end": 126
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
              "name": "goodDeclaration",
              "optional": false,
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
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 166,
                          "end": 167
                        },
                        "constraint": null,
                        "default": null,
                        "in": false,
                        "out": false,
                        "const": false,
                        "start": 166,
                        "end": 167
                      }
                    ],
                    "start": 165,
                    "end": 168
                  },
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
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
                                "name": "shouldPrintResult",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 276,
                                "end": 293
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSConditionalType",
                                  "checkType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 295,
                                      "end": 296
                                    },
                                    "typeArguments": null,
                                    "start": 295,
                                    "end": 296
                                  },
                                  "extendsType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Other",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 305,
                                      "end": 310
                                    },
                                    "typeArguments": null,
                                    "start": 305,
                                    "end": 310
                                  },
                                  "trueType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "O",
                                      "raw": "\"O\"",
                                      "start": 312,
                                      "end": 315
                                    },
                                    "start": 312,
                                    "end": 315
                                  },
                                  "falseType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "N",
                                      "raw": "\"N\"",
                                      "start": 317,
                                      "end": 320
                                    },
                                    "start": 317,
                                    "end": 320
                                  },
                                  "start": 295,
                                  "end": 320
                                },
                                "start": 293,
                                "end": 320
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 276,
                              "end": 321
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "shouldPrintResult2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 467,
                                "end": 485
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSConditionalType",
                                  "checkType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "T",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 487,
                                      "end": 488
                                    },
                                    "typeArguments": null,
                                    "start": 487,
                                    "end": 488
                                  },
                                  "extendsType": {
                                    "type": "TSTypeQuery",
                                    "exprName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "shouldBeElided",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 504,
                                      "end": 518
                                    },
                                    "typeArguments": null,
                                    "start": 497,
                                    "end": 518
                                  },
                                  "trueType": {
                                    "type": "TSTypeReference",
                                    "typeName": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "Other",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 520,
                                      "end": 525
                                    },
                                    "typeArguments": null,
                                    "start": 520,
                                    "end": 525
                                  },
                                  "falseType": {
                                    "type": "TSLiteralType",
                                    "literal": {
                                      "type": "Literal",
                                      "value": "N",
                                      "raw": "\"N\"",
                                      "start": 527,
                                      "end": 530
                                    },
                                    "start": 527,
                                    "end": 530
                                  },
                                  "start": 487,
                                  "end": 530
                                },
                                "start": 485,
                                "end": 530
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 467,
                              "end": 531
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "shouldLookupName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 612,
                                "end": 628
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "TSImportType",
                                    "source": {
                                      "type": "Literal",
                                      "value": "./other",
                                      "raw": "'./other'",
                                      "start": 644,
                                      "end": 653
                                    },
                                    "options": null,
                                    "qualifier": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "shouldLookupName",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 655,
                                      "end": 671
                                    },
                                    "typeArguments": null,
                                    "start": 637,
                                    "end": 671
                                  },
                                  "typeArguments": null,
                                  "start": 630,
                                  "end": 671
                                },
                                "start": 628,
                                "end": 671
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 612,
                              "end": 672
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "shouldReuseLocalName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 742,
                                "end": 762
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "shouldReuseLocalName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 771,
                                    "end": 791
                                  },
                                  "typeArguments": null,
                                  "start": 764,
                                  "end": 791
                                },
                                "start": 762,
                                "end": 791
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 742,
                              "end": 791
                            },
                            {
                              "type": "TSPropertySignature",
                              "computed": false,
                              "optional": false,
                              "readonly": false,
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "reuseDepName",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 862,
                                "end": 874
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSTypeQuery",
                                  "exprName": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "reuseDepName",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 883,
                                    "end": 895
                                  },
                                  "typeArguments": null,
                                  "start": 876,
                                  "end": 895
                                },
                                "start": 874,
                                "end": 895
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 862,
                              "end": 896
                            }
                          ],
                          "start": 180,
                          "end": 898
                        },
                        "start": 177,
                        "end": 898
                      },
                      "start": 174,
                      "end": 898
                    },
                    "start": 171,
                    "end": 898
                  },
                  "start": 165,
                  "end": 898
                },
                "start": 163,
                "end": 898
              },
              "start": 148,
              "end": 898
            },
            "init": null,
            "definite": false,
            "start": 148,
            "end": 898
          }
        ],
        "declare": true,
        "start": 134,
        "end": 898
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 127,
      "end": 898
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldLookupName",
            "optional": false,
            "typeAnnotation": null,
            "start": 908,
            "end": 924
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldLookupName",
            "optional": false,
            "typeAnnotation": null,
            "start": 908,
            "end": 924
          },
          "exportKind": "value",
          "start": 908,
          "end": 924
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null,
            "start": 926,
            "end": 946
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null,
            "start": 926,
            "end": 946
          },
          "exportKind": "value",
          "start": 926,
          "end": 946
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "reuseDepName",
            "optional": false,
            "typeAnnotation": null,
            "start": 948,
            "end": 960
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "reuseDepName",
            "optional": false,
            "typeAnnotation": null,
            "start": 948,
            "end": 960
          },
          "exportKind": "value",
          "start": 948,
          "end": 960
        },
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null,
            "start": 962,
            "end": 976
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null,
            "start": 962,
            "end": 976
          },
          "exportKind": "value",
          "start": 962,
          "end": 976
        }
      ],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 899,
      "end": 979
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 980
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
    "value": "Other",
    "start": 9,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 15,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 17,
    "end": 21
  },
  {
    "type": "String",
    "value": "'./inner'",
    "start": 22,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 32,
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
    "value": "shouldLookupName",
    "start": 41,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 57,
    "end": 58
  },
  {
    "type": "Identifier",
    "value": "reuseDepName",
    "start": 59,
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
    "value": "shouldReuseLocalName",
    "start": 73,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "shouldBeElided",
    "start": 95,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 112,
    "end": 116
  },
  {
    "type": "String",
    "value": "'./other'",
    "start": 117,
    "end": 126
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 127,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 134,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 142,
    "end": 147
  },
  {
    "type": "Identifier",
    "value": "goodDeclaration",
    "start": 148,
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
    "value": "<",
    "start": 165,
    "end": 166
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 171,
    "end": 173
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 175,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 177,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 180,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "shouldPrintResult",
    "start": 276,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 293,
    "end": 294
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 297,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 305,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 310,
    "end": 311
  },
  {
    "type": "String",
    "value": "\"O\"",
    "start": 312,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 315,
    "end": 316
  },
  {
    "type": "String",
    "value": "\"N\"",
    "start": 317,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "shouldPrintResult2",
    "start": 467,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 485,
    "end": 486
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 489,
    "end": 496
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 497,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "shouldBeElided",
    "start": 504,
    "end": 518
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 518,
    "end": 519
  },
  {
    "type": "Identifier",
    "value": "Other",
    "start": 520,
    "end": 525
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 525,
    "end": 526
  },
  {
    "type": "String",
    "value": "\"N\"",
    "start": 527,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 530,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "shouldLookupName",
    "start": 612,
    "end": 628
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 628,
    "end": 629
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 630,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 637,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "String",
    "value": "'./other'",
    "start": 644,
    "end": 653
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "shouldLookupName",
    "start": 655,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "shouldReuseLocalName",
    "start": 742,
    "end": 762
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 762,
    "end": 763
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 764,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "shouldReuseLocalName",
    "start": 771,
    "end": 791
  },
  {
    "type": "Identifier",
    "value": "reuseDepName",
    "start": 862,
    "end": 874
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 874,
    "end": 875
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 876,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "reuseDepName",
    "start": 883,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 895,
    "end": 896
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 897,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 899,
    "end": 905
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 906,
    "end": 907
  },
  {
    "type": "Identifier",
    "value": "shouldLookupName",
    "start": 908,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 924,
    "end": 925
  },
  {
    "type": "Identifier",
    "value": "shouldReuseLocalName",
    "start": 926,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "reuseDepName",
    "start": 948,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "shouldBeElided",
    "start": 962,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 977,
    "end": 978
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 978,
    "end": 979
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
            "name": "goodDeclaration",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 24
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "goodDeclaration",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 24
          },
          "importKind": "value",
          "start": 9,
          "end": 24
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 46
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldReuseLocalName",
            "optional": false,
            "typeAnnotation": null,
            "start": 26,
            "end": 46
          },
          "importKind": "value",
          "start": 26,
          "end": 46
        },
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 62
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldBeElided",
            "optional": false,
            "typeAnnotation": null,
            "start": 48,
            "end": 62
          },
          "importKind": "value",
          "start": 48,
          "end": 62
        }
      ],
      "source": {
        "type": "Literal",
        "value": "some-dep",
        "raw": "\"some-dep\"",
        "start": 70,
        "end": 80
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 81
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
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 98
            },
            "init": {
              "type": "TSInstantiationExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "goodDeclaration",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 116
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeLiteral",
                    "members": [],
                    "start": 117,
                    "end": 119
                  }
                ],
                "start": 116,
                "end": 120
              },
              "start": 101,
              "end": 120
            },
            "definite": false,
            "start": 95,
            "end": 120
          }
        ],
        "declare": false,
        "start": 89,
        "end": 121
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 82,
      "end": 121
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 122
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
    "value": "goodDeclaration",
    "start": 9,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "shouldReuseLocalName",
    "start": 26,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "shouldBeElided",
    "start": 48,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "from",
    "start": 65,
    "end": 69
  },
  {
    "type": "String",
    "value": "\"some-dep\"",
    "start": 70,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 80,
    "end": 81
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 82,
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
    "value": "bar",
    "start": 95,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 99,
    "end": 100
  },
  {
    "type": "Identifier",
    "value": "goodDeclaration",
    "start": 101,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  }
]
```
