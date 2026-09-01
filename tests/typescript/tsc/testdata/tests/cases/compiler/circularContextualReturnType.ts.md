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
            "name": "Object",
            "optional": false,
            "typeAnnotation": null,
            "start": 22,
            "end": 28
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "freeze",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 35
          },
          "optional": false,
          "computed": false,
          "start": 22,
          "end": 35
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 42,
                  "end": 45
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
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Object",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 65,
                              "end": 71
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "freeze",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 72,
                              "end": 78
                            },
                            "optional": false,
                            "computed": false,
                            "start": 65,
                            "end": 78
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Literal",
                              "value": "a",
                              "raw": "'a'",
                              "start": 79,
                              "end": 82
                            }
                          ],
                          "optional": false,
                          "start": 65,
                          "end": 83
                        },
                        "start": 58,
                        "end": 84
                      }
                    ],
                    "start": 48,
                    "end": 90
                  },
                  "expression": false,
                  "start": 45,
                  "end": 90
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 42,
                "end": 90
              }
            ],
            "start": 36,
            "end": 93
          }
        ],
        "optional": false,
        "start": 22,
        "end": 94
      },
      "directive": null,
      "start": 22,
      "end": 95
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 95
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "Object",
    "start": 22,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 28,
    "end": 29
  },
  {
    "type": "Identifier",
    "value": "freeze",
    "start": 29,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 36,
    "end": 37
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 42,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 48,
    "end": 49
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 58,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 65,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 71,
    "end": 72
  },
  {
    "type": "Identifier",
    "value": "freeze",
    "start": 72,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 78,
    "end": 79
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 79,
    "end": 82
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 94,
    "end": 95
  }
]
```
