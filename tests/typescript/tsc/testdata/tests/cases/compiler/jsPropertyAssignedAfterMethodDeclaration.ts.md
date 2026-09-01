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
            "name": "o",
            "optional": false,
            "typeAnnotation": null,
            "start": 6,
            "end": 7
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 16,
                  "end": 17
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
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 101,
                              "end": 105
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 106,
                              "end": 107
                            },
                            "optional": false,
                            "computed": false,
                            "start": 101,
                            "end": 107
                          },
                          "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 110,
                            "end": 111
                          },
                          "start": 101,
                          "end": 111
                        },
                        "directive": null,
                        "start": 101,
                        "end": 112
                      }
                    ],
                    "start": 20,
                    "end": 118
                  },
                  "expression": false,
                  "start": 17,
                  "end": 118
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 16,
                "end": 118
              }
            ],
            "start": 10,
            "end": 120
          },
          "definite": false,
          "start": 6,
          "end": 120
        }
      ],
      "declare": false,
      "start": 0,
      "end": 121
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 121
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
    "value": "o",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 10,
    "end": 11
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 17,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 18,
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
    "value": "this",
    "start": 101,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 108,
    "end": 109
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 120,
    "end": 121
  }
]
```
