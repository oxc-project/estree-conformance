__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
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
            "name": "tokens",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "startIndex",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 16,
                      "end": 26
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "deltaOffset",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 28,
                      "end": 39
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 16,
                    "end": 39
                  }
                ],
                "start": 14,
                "end": 41
              }
            ],
            "start": 13,
            "end": 42
          },
          "definite": false,
          "start": 4,
          "end": 42
        }
      ],
      "declare": false,
      "start": 0,
      "end": 43
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
            "name": "functions",
            "optional": false,
            "typeAnnotation": null,
            "start": 49,
            "end": 58
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
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
                            "type": "ArrayExpression",
                            "elements": [
                              {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "start": 80,
                                "end": 81
                              },
                              {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "start": 83,
                                "end": 84
                              },
                              {
                                "type": "Literal",
                                "value": 3,
                                "raw": "3",
                                "start": 86,
                                "end": 87
                              }
                            ],
                            "start": 79,
                            "end": 88
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NonexistantMethod",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 89,
                            "end": 106
                          },
                          "optional": false,
                          "computed": false,
                          "start": 79,
                          "end": 106
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 79,
                        "end": 108
                      },
                      "directive": null,
                      "start": 79,
                      "end": 109
                    },
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "anotherNonExistingMethod",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 114,
                          "end": 138
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "optional": false,
                        "start": 114,
                        "end": 140
                      },
                      "directive": null,
                      "start": 114,
                      "end": 141
                    }
                  ],
                  "start": 73,
                  "end": 143
                },
                "expression": false,
                "start": 62,
                "end": 143
              }
            ],
            "start": 61,
            "end": 144
          },
          "definite": false,
          "start": 49,
          "end": 144
        }
      ],
      "declare": false,
      "start": 45,
      "end": 145
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 146
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3
  },
  {
    "type": "Identifier",
    "value": "tokens",
    "start": 4,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 11,
    "end": 12
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 13,
    "end": 14
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Identifier",
    "value": "startIndex",
    "start": 16,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "deltaOffset",
    "start": 28,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 40,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 42,
    "end": 43
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 45,
    "end": 48
  },
  {
    "type": "Identifier",
    "value": "functions",
    "start": 49,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 61,
    "end": 62
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 62,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 71,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 73,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 79,
    "end": 80
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 80,
    "end": 81
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 81,
    "end": 82
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 84,
    "end": 85
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 86,
    "end": 87
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "NonexistantMethod",
    "start": 89,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "anotherNonExistingMethod",
    "start": 114,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 144,
    "end": 145
  }
]
```
