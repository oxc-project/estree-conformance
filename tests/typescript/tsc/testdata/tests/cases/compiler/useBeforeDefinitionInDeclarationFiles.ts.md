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
          "name": "ClassWithSymbols",
          "optional": false,
          "typeAnnotation": null,
          "start": 21,
          "end": 37
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
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Namespace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 68
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "locallyExportedCustomSymbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 69,
                  "end": 96
                },
                "optional": false,
                "computed": false,
                "start": 59,
                "end": 96
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 99,
                  "end": 105
                },
                "start": 97,
                "end": 105
              },
              "value": null,
              "computed": true,
              "static": false,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
              "accessibility": "public",
              "start": 42,
              "end": 106
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Namespace",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 117,
                  "end": 126
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "fullyExportedCustomSymbol",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 127,
                  "end": 152
                },
                "optional": false,
                "computed": false,
                "start": 117,
                "end": 152
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 157,
                    "end": 161
                  },
                  "start": 155,
                  "end": 161
                },
                "body": null,
                "expression": false,
                "start": 153,
                "end": 162
              },
              "kind": "method",
              "computed": true,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": "public",
              "start": 109,
              "end": 162
            }
          ],
          "start": 38,
          "end": 164
        },
        "abstract": false,
        "declare": true,
        "start": 7,
        "end": 164
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 164
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Namespace",
          "optional": false,
          "typeAnnotation": null,
          "start": 182,
          "end": 191
        },
        "body": {
          "type": "TSModuleBlock",
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
                      "name": "locallyExportedCustomSymbol",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "unique",
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 245,
                            "end": 251
                          },
                          "start": 238,
                          "end": 251
                        },
                        "start": 236,
                        "end": 251
                      },
                      "start": 209,
                      "end": 251
                    },
                    "init": null,
                    "definite": false,
                    "start": 209,
                    "end": 251
                  }
                ],
                "declare": false,
                "start": 203,
                "end": 252
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 196,
              "end": 252
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
                      "name": "fullyExportedCustomSymbol",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "operator": "unique",
                          "typeAnnotation": {
                            "type": "TSSymbolKeyword",
                            "start": 302,
                            "end": 308
                          },
                          "start": 295,
                          "end": 308
                        },
                        "start": 293,
                        "end": 308
                      },
                      "start": 268,
                      "end": 308
                    },
                    "init": null,
                    "definite": false,
                    "start": 268,
                    "end": 308
                  }
                ],
                "declare": false,
                "start": 262,
                "end": 309
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 255,
              "end": 309
            }
          ],
          "start": 192,
          "end": 311
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 172,
        "end": 311
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 165,
      "end": 311
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 311
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
    "value": "class",
    "start": 15,
    "end": 20
  },
  {
    "type": "Identifier",
    "value": "ClassWithSymbols",
    "start": 21,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 38,
    "end": 39
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 42,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 49,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 58,
    "end": 59
  },
  {
    "type": "Identifier",
    "value": "Namespace",
    "start": 59,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 68,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "locallyExportedCustomSymbol",
    "start": 69,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "Namespace",
    "start": 117,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "fullyExportedCustomSymbol",
    "start": 127,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 154,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 155,
    "end": 156
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 157,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "namespace",
    "start": 172,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Namespace",
    "start": 182,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 192,
    "end": 193
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 196,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 203,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "locallyExportedCustomSymbol",
    "start": 209,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 238,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 245,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 251,
    "end": 252
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 255,
    "end": 261
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 262,
    "end": 267
  },
  {
    "type": "Identifier",
    "value": "fullyExportedCustomSymbol",
    "start": 268,
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
    "value": "unique",
    "start": 295,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "symbol",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311
  }
]
```
