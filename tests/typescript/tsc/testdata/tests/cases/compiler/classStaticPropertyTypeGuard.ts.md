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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 27,
        "end": 28
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
              "name": "_a",
              "optional": false,
              "typeAnnotation": null,
              "start": 50,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 54,
                    "end": 60
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 63,
                    "end": 72
                  }
                ],
                "start": 54,
                "end": 72
              },
              "start": 52,
              "end": 72
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 35,
            "end": 73
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 90,
              "end": 91
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
                  "type": "TSStringKeyword",
                  "start": 95,
                  "end": 101
                },
                "start": 93,
                "end": 101
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 117
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "_a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 118,
                        "end": 120
                      },
                      "optional": false,
                      "computed": false,
                      "start": 116,
                      "end": 120
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 143,
                              "end": 144
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "_a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 145,
                              "end": 147
                            },
                            "optional": false,
                            "computed": false,
                            "start": 143,
                            "end": 147
                          },
                          "start": 136,
                          "end": 148
                        }
                      ],
                      "start": 122,
                      "end": 192
                    },
                    "alternate": null,
                    "start": 112,
                    "end": 192
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "AssignmentExpression",
                      "operator": "=",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 208,
                          "end": 209
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "_a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 210,
                          "end": 212
                        },
                        "optional": false,
                        "computed": false,
                        "start": 208,
                        "end": 212
                      },
                      "right": {
                        "type": "Literal",
                        "value": "helloworld",
                        "raw": "'helloworld'",
                        "start": 215,
                        "end": 227
                      },
                      "start": 208,
                      "end": 227
                    },
                    "start": 201,
                    "end": 228
                  }
                ],
                "start": 102,
                "end": 234
              },
              "expression": false,
              "start": 91,
              "end": 234
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 79,
            "end": 234
          }
        ],
        "start": 29,
        "end": 236
      },
      "abstract": false,
      "declare": false,
      "start": 21,
      "end": 236
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 21,
  "end": 236
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 21,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 35,
    "end": 42
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 50,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 52,
    "end": 53
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 54,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 63,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 79,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 86,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 91,
    "end": 92
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 102,
    "end": 103
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 115,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 116,
    "end": 117
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 117,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 118,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 122,
    "end": 123
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 136,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 145,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 191,
    "end": 192
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 201,
    "end": 207
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 209,
    "end": 210
  },
  {
    "type": "Identifier",
    "value": "_a",
    "start": 210,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 213,
    "end": 214
  },
  {
    "type": "String",
    "value": "'helloworld'",
    "start": 215,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 235,
    "end": 236
  }
]
```
