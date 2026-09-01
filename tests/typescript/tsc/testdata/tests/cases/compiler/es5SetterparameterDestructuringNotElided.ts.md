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
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 9
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "set",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 25
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "start",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 27,
                          "end": 32
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "end",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 34,
                          "end": 37
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSAnyKeyword",
                              "start": 41,
                              "end": 44
                            },
                            {
                              "type": "TSAnyKeyword",
                              "start": 46,
                              "end": 49
                            }
                          ],
                          "start": 40,
                          "end": 50
                        },
                        "start": 38,
                        "end": 50
                      },
                      "start": 26,
                      "end": 50
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UnaryExpression",
                          "operator": "void",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "start",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 67,
                            "end": 72
                          },
                          "prefix": true,
                          "start": 62,
                          "end": 72
                        },
                        "directive": null,
                        "start": 62,
                        "end": 73
                      },
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "UnaryExpression",
                          "operator": "void",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "end",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 87,
                            "end": 90
                          },
                          "prefix": true,
                          "start": 82,
                          "end": 90
                        },
                        "directive": null,
                        "start": 82,
                        "end": 91
                      }
                    ],
                    "start": 52,
                    "end": 97
                  },
                  "expression": false,
                  "start": 25,
                  "end": 97
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 18,
                "end": 97
              }
            ],
            "start": 12,
            "end": 100
          },
          "definite": false,
          "start": 6,
          "end": 100
        }
      ],
      "declare": false,
      "start": 0,
      "end": 101
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 101
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
    "value": "foo",
    "start": 6,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 18,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 22,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 27,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 32,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 34,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 40,
    "end": 41
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 41,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 46,
    "end": 49
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 49,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 52,
    "end": 53
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 62,
    "end": 66
  },
  {
    "type": "Identifier",
    "value": "start",
    "start": 67,
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
    "value": "void",
    "start": 82,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "end",
    "start": 87,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 100,
    "end": 101
  }
]
```
