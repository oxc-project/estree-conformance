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
            "name": "dedupingMixin",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 38
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "mixin",
                "optional": false,
                "typeAnnotation": null,
                "start": 50,
                "end": 55
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [],
              "start": 57,
              "end": 59
            },
            "expression": false,
            "start": 41,
            "end": 59
          },
          "definite": false,
          "start": 25,
          "end": 59
        }
      ],
      "declare": false,
      "start": 19,
      "end": 60
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
            "name": "PropertyAccessors",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 107
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "dedupingMixin",
              "optional": false,
              "typeAnnotation": null,
              "start": 110,
              "end": 123
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Bar",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 140,
                        "end": 143
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
                              "name": "bar",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 157,
                              "end": 160
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
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "CallExpression",
                                      "callee": {
                                        "type": "MemberExpression",
                                        "object": {
                                          "type": "MemberExpression",
                                          "object": {
                                            "type": "ThisExpression",
                                            "start": 165,
                                            "end": 169
                                          },
                                          "property": {
                                            "type": "Identifier",
                                            "decorators": [],
                                            "name": "prototype",
                                            "optional": false,
                                            "typeAnnotation": null,
                                            "start": 170,
                                            "end": 179
                                          },
                                          "optional": false,
                                          "computed": false,
                                          "start": 165,
                                          "end": 179
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "foo",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 180,
                                          "end": 183
                                        },
                                        "optional": false,
                                        "computed": false,
                                        "start": 165,
                                        "end": 183
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "optional": false,
                                      "start": 165,
                                      "end": 185
                                    },
                                    "directive": null,
                                    "start": 165,
                                    "end": 186
                                  }
                                ],
                                "start": 163,
                                "end": 188
                              },
                              "expression": false,
                              "start": 160,
                              "end": 188
                            },
                            "kind": "method",
                            "computed": false,
                            "static": true,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 150,
                            "end": 188
                          }
                        ],
                        "start": 144,
                        "end": 192
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 134,
                      "end": 192
                    }
                  ],
                  "start": 130,
                  "end": 194
                },
                "id": null,
                "generator": false,
                "start": 124,
                "end": 194
              }
            ],
            "optional": false,
            "start": 110,
            "end": 195
          },
          "definite": false,
          "start": 90,
          "end": 195
        }
      ],
      "declare": false,
      "start": 84,
      "end": 196
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 19,
  "end": 197
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "const",
    "start": 19,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "dedupingMixin",
    "start": 25,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 39,
    "end": 40
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 41,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "mixin",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 55,
    "end": 56
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 58,
    "end": 59
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 59,
    "end": 60
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 84,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "PropertyAccessors",
    "start": 90,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "dedupingMixin",
    "start": 110,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
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
    "value": "=>",
    "start": 127,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 134,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "Bar",
    "start": 140,
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
    "value": "static",
    "start": 150,
    "end": 156
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 157,
    "end": 160
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 161,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 163,
    "end": 164
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 165,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170
  },
  {
    "type": "Identifier",
    "value": "prototype",
    "start": 170,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 180,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 193,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 195,
    "end": 196
  }
]
```
