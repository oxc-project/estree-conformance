__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "JSON",
            "optional": false,
            "typeAnnotation": null,
            "start": 0,
            "end": 4
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "parse",
            "optional": false,
            "typeAnnotation": null,
            "start": 5,
            "end": 10
          },
          "optional": false,
          "computed": false,
          "start": 0,
          "end": 10
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "{\"value\": 1}",
            "raw": "'{\"value\": 1}'",
            "start": 11,
            "end": 25
          },
          {
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
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 40
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "parsedValue",
                "optional": false,
                "typeAnnotation": null,
                "start": 42,
                "end": 53
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "context",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 62
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
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
                        "name": "source",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "types": [
                              {
                                "type": "TSStringKeyword",
                                "start": 84,
                                "end": 90
                              },
                              {
                                "type": "TSUndefinedKeyword",
                                "start": 93,
                                "end": 102
                              }
                            ],
                            "start": 84,
                            "end": 102
                          },
                          "start": 82,
                          "end": 102
                        },
                        "start": 76,
                        "end": 102
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "context",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 105,
                          "end": 112
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "source",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 113,
                          "end": 119
                        },
                        "optional": false,
                        "computed": false,
                        "start": 105,
                        "end": 119
                      },
                      "definite": false,
                      "start": 76,
                      "end": 119
                    }
                  ],
                  "declare": false,
                  "start": 70,
                  "end": 120
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "parsedValue",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 132,
                    "end": 143
                  },
                  "start": 125,
                  "end": 144
                }
              ],
              "start": 64,
              "end": 146
            },
            "expression": false,
            "start": 27,
            "end": 146
          }
        ],
        "optional": false,
        "start": 0,
        "end": 147
      },
      "directive": null,
      "start": 0,
      "end": 148
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 148
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "JSON",
    "start": 0,
    "end": 4
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "parse",
    "start": 5,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 10,
    "end": 11
  },
  {
    "type": "String",
    "value": "'{\"value\": 1}'",
    "start": 11,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 27,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 37,
    "end": 40
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "parsedValue",
    "start": 42,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 55,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 70,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 76,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 82,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 84,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 91,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 93,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 105,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 112,
    "end": 113
  },
  {
    "type": "Identifier",
    "value": "source",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 125,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "parsedValue",
    "start": 132,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  }
]
```
