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
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 12,
        "end": 15
      },
      "declare": false,
      "start": 0,
      "end": 15
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 22,
        "end": 24
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 25,
        "end": 28
      },
      "abstract": false,
      "declare": false,
      "start": 16,
      "end": 28
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 37
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 38,
        "end": 41
      },
      "abstract": false,
      "declare": false,
      "start": 29,
      "end": 41
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 52
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 55,
        "end": 58
      },
      "expression": false,
      "start": 42,
      "end": 58
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 64
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 67,
            "end": 68
          },
          "definite": false,
          "start": 63,
          "end": 68
        }
      ],
      "declare": false,
      "start": 59,
      "end": 69
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 77,
        "end": 80
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 95
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 97,
                "end": 103
              },
              "start": 95,
              "end": 103
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 87,
            "end": 104
          }
        ],
        "start": 81,
        "end": 106
      },
      "abstract": false,
      "declare": false,
      "start": 71,
      "end": 106
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 118,
        "end": 119
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 144
              },
              "body": {
                "type": "TSModuleBlock",
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
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 159,
                          "end": 160
                        },
                        "init": null,
                        "definite": false,
                        "start": 159,
                        "end": 160
                      }
                    ],
                    "declare": false,
                    "start": 155,
                    "end": 161
                  }
                ],
                "start": 145,
                "end": 167
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 133,
              "end": 167
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 126,
            "end": 167
          }
        ],
        "start": 120,
        "end": 169
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 108,
      "end": 169
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 16,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 22,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 27,
    "end": 28
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 29,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 35,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 42,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 59,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 65,
    "end": 66
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "value": "class",
    "start": 71,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 77,
    "end": 80
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 81,
    "end": 82
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 87,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 94,
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
    "value": "number",
    "start": 97,
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
    "type": "Identifier",
    "value": "namespace",
    "start": 108,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 120,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 126,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 133,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 155,
    "end": 158
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 168,
    "end": 169
  }
]
```
__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 8,
        "end": 11
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 11
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 80,
        "end": 82
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [],
        "start": 83,
        "end": 86
      },
      "declare": false,
      "start": 70,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 154,
        "end": 156
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 159,
        "end": 162
      },
      "expression": false,
      "start": 145,
      "end": 162
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 226,
        "end": 227
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 228,
        "end": 231
      },
      "abstract": false,
      "declare": false,
      "start": 220,
      "end": 231
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "v",
            "optional": false,
            "typeAnnotation": null,
            "start": 293,
            "end": 294
          },
          "init": {
            "type": "Literal",
            "value": 3,
            "raw": "3",
            "start": 297,
            "end": 298
          },
          "definite": false,
          "start": 293,
          "end": 298
        }
      ],
      "declare": false,
      "start": 289,
      "end": 299
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 311,
        "end": 314
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
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
                        "type": "TSNumberKeyword",
                        "start": 335,
                        "end": 341
                      },
                      "start": 333,
                      "end": 341
                    },
                    "start": 332,
                    "end": 341
                  },
                  "init": null,
                  "definite": false,
                  "start": 332,
                  "end": 341
                }
              ],
              "declare": false,
              "start": 328,
              "end": 342
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 321,
            "end": 342
          }
        ],
        "start": 315,
        "end": 395
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 301,
      "end": 395
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "N",
        "optional": false,
        "typeAnnotation": null,
        "start": 415,
        "end": 416
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "F",
                "optional": false,
                "typeAnnotation": null,
                "start": 439,
                "end": 440
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": null,
              "expression": false,
              "start": 430,
              "end": 443
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 423,
            "end": 443
          }
        ],
        "start": 417,
        "end": 485
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 397,
      "end": 485
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 485
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 10,
    "end": 11
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 70,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "C1",
    "start": 80,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 145,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "C2",
    "start": 154,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 220,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 289,
    "end": 292
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 293,
    "end": 294
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 295,
    "end": 296
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 301,
    "end": 310
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 311,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 315,
    "end": 316
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 321,
    "end": 327
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 328,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 332,
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
    "value": "number",
    "start": 335,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 397,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 405,
    "end": 414
  },
  {
    "type": "Identifier",
    "value": "N",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 417,
    "end": 418
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 423,
    "end": 429
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 430,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "F",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 484,
    "end": 485
  }
]
```
