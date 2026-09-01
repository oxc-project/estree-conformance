__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TopLevelClass",
          "optional": false,
          "typeAnnotation": null,
          "start": 13,
          "end": 26
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 27,
          "end": 29
        },
        "abstract": false,
        "declare": false,
        "start": 7,
        "end": 29
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 29
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TopLevelModule",
          "optional": false,
          "typeAnnotation": null,
          "start": 47,
          "end": 61
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
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 67,
                    "end": 68
                  },
                  "init": null,
                  "definite": false,
                  "start": 67,
                  "end": 68
                }
              ],
              "declare": false,
              "start": 63,
              "end": 69
            }
          ],
          "start": 62,
          "end": 70
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 37,
        "end": 70
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 30,
      "end": 70
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TopLevelFunction",
          "optional": false,
          "typeAnnotation": null,
          "start": 87,
          "end": 103
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 107,
            "end": 111
          },
          "start": 105,
          "end": 111
        },
        "body": {
          "type": "BlockStatement",
          "body": [],
          "start": 112,
          "end": 114
        },
        "expression": false,
        "start": 78,
        "end": 114
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 71,
      "end": 114
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TopLevelEnum",
          "optional": false,
          "typeAnnotation": null,
          "start": 127,
          "end": 139
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null,
                "start": 141,
                "end": 142
              },
              "initializer": null,
              "computed": false,
              "start": 141,
              "end": 142
            }
          ],
          "start": 140,
          "end": 143
        },
        "const": false,
        "declare": false,
        "start": 122,
        "end": 143
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 115,
      "end": 143
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "TopLevelModule2",
          "optional": false,
          "typeAnnotation": null,
          "start": 162,
          "end": 177
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "ClassDeclaration",
                "decorators": [],
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonTopLevelClass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 197,
                  "end": 213
                },
                "typeParameters": null,
                "superClass": null,
                "superTypeArguments": null,
                "implements": [],
                "body": {
                  "type": "ClassBody",
                  "body": [],
                  "start": 214,
                  "end": 216
                },
                "abstract": false,
                "declare": false,
                "start": 191,
                "end": 216
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 184,
              "end": 216
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSModuleDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonTopLevelModule",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 255
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
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 261,
                            "end": 262
                          },
                          "init": null,
                          "definite": false,
                          "start": 261,
                          "end": 262
                        }
                      ],
                      "declare": false,
                      "start": 257,
                      "end": 263
                    }
                  ],
                  "start": 256,
                  "end": 264
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 228,
                "end": 264
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 221,
              "end": 264
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "FunctionDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonTopLevelFunction",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 304
                },
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 308,
                    "end": 312
                  },
                  "start": 306,
                  "end": 312
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [],
                  "start": 313,
                  "end": 315
                },
                "expression": false,
                "start": 276,
                "end": 315
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 269,
              "end": 315
            },
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSEnumDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "NonTopLevelEnum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 347
                },
                "body": {
                  "type": "TSEnumBody",
                  "members": [
                    {
                      "type": "TSEnumMember",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "E",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 349,
                        "end": 350
                      },
                      "initializer": null,
                      "computed": false,
                      "start": 349,
                      "end": 350
                    }
                  ],
                  "start": 348,
                  "end": 351
                },
                "const": false,
                "declare": false,
                "start": 327,
                "end": 351
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 320,
              "end": 351
            }
          ],
          "start": 178,
          "end": 353
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 152,
        "end": 353
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 145,
      "end": 353
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 353
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
    "value": "class",
    "start": 7,
    "end": 12
  },
  {
    "type": "Identifier",
    "value": "TopLevelClass",
    "start": 13,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "namespace",
    "start": 37,
    "end": 46
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule",
    "start": 47,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 62,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 63,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "v",
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
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 71,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 78,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "TopLevelFunction",
    "start": 87,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 107,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 112,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 113,
    "end": 114
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 115,
    "end": 121
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 122,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "TopLevelEnum",
    "start": 127,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 145,
    "end": 151
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 152,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "TopLevelModule2",
    "start": 162,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 178,
    "end": 179
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 184,
    "end": 190
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 191,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "NonTopLevelClass",
    "start": 197,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 215,
    "end": 216
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 221,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 228,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "NonTopLevelModule",
    "start": 238,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 256,
    "end": 257
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 257,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 261,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 262,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 263,
    "end": 264
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 269,
    "end": 275
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 276,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "NonTopLevelFunction",
    "start": 285,
    "end": 304
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 304,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 305,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 306,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 308,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 314,
    "end": 315
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 320,
    "end": 326
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 327,
    "end": 331
  },
  {
    "type": "Identifier",
    "value": "NonTopLevelEnum",
    "start": 332,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 348,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 349,
    "end": 350
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 350,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  }
]
```
