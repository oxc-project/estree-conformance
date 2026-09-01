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
        "start": 51,
        "end": 52
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null,
              "start": 53,
              "end": 55
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 73
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 74,
                    "end": 91
                  },
                  "start": 70,
                  "end": 91
                },
                "typeArguments": null,
                "start": 70,
                "end": 91
              },
              "start": 64,
              "end": 91
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 53,
            "end": 91
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T2",
              "optional": false,
              "typeAnnotation": null,
              "start": 93,
              "end": 95
            },
            "constraint": {
              "type": "TSTypeOperator",
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "JSX",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 110,
                    "end": 113
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "IntrinsicElements",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 114,
                    "end": 131
                  },
                  "start": 110,
                  "end": 131
                },
                "typeArguments": null,
                "start": 110,
                "end": 131
              },
              "start": 104,
              "end": 131
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 93,
            "end": 131
          }
        ],
        "start": 52,
        "end": 132
      },
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
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 139,
              "end": 140
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
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
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "JSX",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 161,
                                    "end": 164
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "IntrinsicElements",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 165,
                                    "end": 182
                                  },
                                  "start": 161,
                                  "end": 182
                                },
                                "typeArguments": null,
                                "start": 161,
                                "end": 182
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 183,
                                  "end": 185
                                },
                                "typeArguments": null,
                                "start": 183,
                                "end": 185
                              },
                              "start": 161,
                              "end": 186
                            },
                            "start": 159,
                            "end": 186
                          },
                          "start": 157,
                          "end": 186
                        },
                        "init": {
                          "type": "ObjectExpression",
                          "properties": [],
                          "start": 189,
                          "end": 191
                        },
                        "definite": false,
                        "start": 157,
                        "end": 191
                      }
                    ],
                    "declare": false,
                    "start": 153,
                    "end": 192
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
                          "name": "c2",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "JSX",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 211,
                                    "end": 214
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "IntrinsicElements",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 215,
                                    "end": 232
                                  },
                                  "start": 211,
                                  "end": 232
                                },
                                "typeArguments": null,
                                "start": 211,
                                "end": 232
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T2",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 233,
                                  "end": 235
                                },
                                "typeArguments": null,
                                "start": 233,
                                "end": 235
                              },
                              "start": 211,
                              "end": 236
                            },
                            "start": 209,
                            "end": 236
                          },
                          "start": 207,
                          "end": 236
                        },
                        "init": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 239,
                          "end": 241
                        },
                        "definite": false,
                        "start": 207,
                        "end": 241
                      }
                    ],
                    "declare": false,
                    "start": 201,
                    "end": 242
                  }
                ],
                "start": 143,
                "end": 248
              },
              "expression": false,
              "start": 140,
              "end": 248
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 139,
            "end": 248
          }
        ],
        "start": 133,
        "end": 250
      },
      "abstract": false,
      "declare": false,
      "start": 45,
      "end": 250
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 45,
  "end": 250
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 45,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "I",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 53,
    "end": 55
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 56,
    "end": 63
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 64,
    "end": 69
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 70,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 74,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 93,
    "end": 95
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 96,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 104,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 110,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 113,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 114,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 131,
    "end": 132
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 141,
    "end": 142
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 143,
    "end": 144
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 153,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 157,
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
    "value": "JSX",
    "start": 161,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 165,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "T1",
    "start": 183,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 189,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 201,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 207,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 211,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 215,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "T2",
    "start": 233,
    "end": 235
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 239,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 241,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 249,
    "end": 250
  }
]
```
