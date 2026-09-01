__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dec",
        "optional": false,
        "typeAnnotation": null,
        "start": 73,
        "end": 76
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 80,
              "end": 83
            },
            "start": 78,
            "end": 83
          },
          "start": 77,
          "end": 83
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 86,
          "end": 89
        },
        "start": 84,
        "end": 89
      },
      "body": null,
      "expression": false,
      "start": 56,
      "end": 90
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null,
        "start": 100,
        "end": 102
      },
      "generator": false,
      "async": false,
      "declare": false,
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
                "name": "Promise",
                "optional": false,
                "typeAnnotation": null,
                "start": 110,
                "end": 117
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 118,
                    "end": 124
                  }
                ],
                "start": 117,
                "end": 125
              },
              "start": 110,
              "end": 125
            },
            "start": 108,
            "end": 125
          },
          "start": 103,
          "end": 125
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 128,
          "end": 131
        },
        "start": 126,
        "end": 131
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Class",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 147
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
                    "name": "method",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 166
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": true,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [
                          {
                            "type": "Decorator",
                            "expression": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "dec",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 168,
                                "end": 171
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "AwaitExpression",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 178,
                                    "end": 183
                                  },
                                  "start": 172,
                                  "end": 183
                                }
                              ],
                              "optional": false,
                              "start": 168,
                              "end": 184
                            },
                            "start": 167,
                            "end": 184
                          }
                        ],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 190,
                            "end": 196
                          },
                          "start": 188,
                          "end": 196
                        },
                        "start": 185,
                        "end": 196
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 198,
                      "end": 200
                    },
                    "expression": false,
                    "start": 166,
                    "end": 200
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 154,
                  "end": 200
                }
              ],
              "start": 148,
              "end": 204
            },
            "abstract": false,
            "declare": false,
            "start": 136,
            "end": 204
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "Class",
              "optional": false,
              "typeAnnotation": null,
              "start": 214,
              "end": 219
            },
            "start": 207,
            "end": 219
          }
        ],
        "start": 132,
        "end": 221
      },
      "expression": false,
      "start": 91,
      "end": 221
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 221
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 56,
    "end": 63
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 64,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 73,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 76,
    "end": 77
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 77,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 78,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 80,
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
    "value": ":",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 86,
    "end": 89
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 89,
    "end": 90
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 91,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 100,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 110,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 128,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 132,
    "end": 133
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 136,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 142,
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
    "value": "async",
    "start": 154,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 160,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 167,
    "end": 168
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 168,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 172,
    "end": 177
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 178,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 185,
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
    "value": "number",
    "start": 190,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 198,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 207,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "Class",
    "start": 214,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 220,
    "end": 221
  }
]
```
