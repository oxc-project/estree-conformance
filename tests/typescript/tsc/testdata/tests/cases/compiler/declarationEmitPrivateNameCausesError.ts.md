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
            "name": "IGNORE_EXTRA_VARIABLES",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 28
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 37
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 31,
            "end": 39
          },
          "definite": false,
          "start": 6,
          "end": 39
        }
      ],
      "declare": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "ignoreExtraVariables",
          "optional": false,
          "typeAnnotation": null,
          "start": 109,
          "end": 129
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
                "name": "CtorT",
                "optional": false,
                "typeAnnotation": null,
                "start": 130,
                "end": 135
              },
              "constraint": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSConstructSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "RestElement",
                        "decorators": [],
                        "argument": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 152,
                          "end": 156
                        },
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSAnyKeyword",
                              "start": 157,
                              "end": 160
                            },
                            "start": 157,
                            "end": 162
                          },
                          "start": 156,
                          "end": 162
                        },
                        "value": null,
                        "start": 149,
                        "end": 162
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 164,
                        "end": 166
                      },
                      "start": 163,
                      "end": 166
                    },
                    "start": 145,
                    "end": 166
                  }
                ],
                "start": 144,
                "end": 167
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 130,
              "end": 167
            }
          ],
          "start": 129,
          "end": 168
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ctor",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "CtorT",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 177,
                  "end": 182
                },
                "typeArguments": null,
                "start": 177,
                "end": 182
              },
              "start": 175,
              "end": 182
            },
            "start": 170,
            "end": 182
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ClassExpression",
                "decorators": [],
                "id": null,
                "typeParameters": null,
                "superClass": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ctor",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 211,
                  "end": 215
                },
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
                        "name": "IGNORE_EXTRA_VARIABLES",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 227,
                        "end": 249
                      },
                      "typeAnnotation": null,
                      "value": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 253,
                        "end": 257
                      },
                      "computed": true,
                      "static": false,
                      "declare": false,
                      "override": false,
                      "optional": false,
                      "definite": false,
                      "readonly": false,
                      "accessibility": null,
                      "start": 226,
                      "end": 258
                    }
                  ],
                  "start": 216,
                  "end": 297
                },
                "abstract": false,
                "declare": false,
                "start": 197,
                "end": 297
              },
              "start": 190,
              "end": 298
            }
          ],
          "start": 184,
          "end": 300
        },
        "expression": false,
        "start": 100,
        "end": 300
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 93,
      "end": 300
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 300
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "IGNORE_EXTRA_VARIABLES",
    "start": 6,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 29,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Symbol",
    "start": 31,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 93,
    "end": 99
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 100,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "ignoreExtraVariables",
    "start": 109,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "CtorT",
    "start": 130,
    "end": 135
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 136,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 144,
    "end": 145
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 145,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 148,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 149,
    "end": 152
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "{",
    "start": 164,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 165,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 170,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "CtorT",
    "start": 177,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 182,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 184,
    "end": 185
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 190,
    "end": 196
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 197,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 203,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "ctor",
    "start": 211,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 226,
    "end": 227
  },
  {
    "type": "Identifier",
    "value": "IGNORE_EXTRA_VARIABLES",
    "start": 227,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 249,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 253,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 296,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 299,
    "end": 300
  }
]
```
