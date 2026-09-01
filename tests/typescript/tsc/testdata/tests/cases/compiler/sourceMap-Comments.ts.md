__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "sas",
          "optional": false,
          "typeAnnotation": null,
          "start": 10,
          "end": 13
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "tools",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 19
        },
        "start": 10,
        "end": 19
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
                "name": "Test",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 43
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "doX",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 61,
                      "end": 64
                    },
                    "value": {
                      "type": "FunctionExpression",
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
                          "start": 68,
                          "end": 72
                        },
                        "start": 66,
                        "end": 72
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
                                  "name": "f",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 94,
                                      "end": 100
                                    },
                                    "start": 92,
                                    "end": 100
                                  },
                                  "start": 91,
                                  "end": 100
                                },
                                "init": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 103,
                                  "end": 104
                                },
                                "definite": false,
                                "start": 91,
                                "end": 104
                              }
                            ],
                            "declare": false,
                            "start": 87,
                            "end": 105
                          },
                          {
                            "type": "SwitchStatement",
                            "discriminant": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "f",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 126,
                              "end": 127
                            },
                            "cases": [
                              {
                                "type": "SwitchCase",
                                "test": {
                                  "type": "Literal",
                                  "value": 1,
                                  "raw": "1",
                                  "start": 152,
                                  "end": 153
                                },
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 175,
                                    "end": 181
                                  }
                                ],
                                "start": 147,
                                "end": 181
                              },
                              {
                                "type": "SwitchCase",
                                "test": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 203,
                                  "end": 204
                                },
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 300,
                                    "end": 306
                                  }
                                ],
                                "start": 198,
                                "end": 306
                              },
                              {
                                "type": "SwitchCase",
                                "test": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 328,
                                  "end": 329
                                },
                                "consequent": [
                                  {
                                    "type": "BreakStatement",
                                    "label": null,
                                    "start": 383,
                                    "end": 389
                                  }
                                ],
                                "start": 323,
                                "end": 389
                              }
                            ],
                            "start": 118,
                            "end": 403
                          }
                        ],
                        "start": 73,
                        "end": 413
                      },
                      "expression": false,
                      "start": 64,
                      "end": 413
                    },
                    "kind": "method",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": "public",
                    "start": 54,
                    "end": 413
                  }
                ],
                "start": 44,
                "end": 419
              },
              "abstract": false,
              "declare": false,
              "start": 33,
              "end": 419
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 26,
            "end": 419
          }
        ],
        "start": 20,
        "end": 422
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 422
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 422
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "sas",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 13,
    "end": 14
  },
  {
    "type": "Identifier",
    "value": "tools",
    "start": 14,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 26,
    "end": 32
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 33,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "Test",
    "start": 39,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 44,
    "end": 45
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 54,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "doX",
    "start": 61,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 65,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 66,
    "end": 67
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 68,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 87,
    "end": 90
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 92,
    "end": 93
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 94,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 103,
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
    "value": "switch",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 125,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 129,
    "end": 130
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 147,
    "end": 151
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 153,
    "end": 154
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 175,
    "end": 180
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 180,
    "end": 181
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 198,
    "end": 202
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 300,
    "end": 305
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 305,
    "end": 306
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 323,
    "end": 327
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 329,
    "end": 330
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 383,
    "end": 388
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 421,
    "end": 422
  }
]
```
