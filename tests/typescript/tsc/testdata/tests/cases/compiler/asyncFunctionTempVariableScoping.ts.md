__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": true,
        "async": true,
        "typeParameters": null,
        "params": [
          {
            "type": "ObjectPattern",
            "decorators": [],
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
                  "start": 66,
                  "end": 69
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 69
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 66,
                "end": 69
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 74
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bar",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 71,
                  "end": 74
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 71,
                "end": 74
              },
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "rest",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 79,
                  "end": 83
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null,
                "start": 76,
                "end": 83
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 64,
            "end": 85
          }
        ],
        "returnType": null,
        "body": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "bar",
            "optional": false,
            "typeAnnotation": null,
            "start": 90,
            "end": 93
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "AwaitExpression",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 100,
                "end": 103
              },
              "start": 94,
              "end": 103
            }
          ],
          "optional": false,
          "start": 90,
          "end": 104
        },
        "id": null,
        "generator": false,
        "start": 57,
        "end": 104
      },
      "directive": null,
      "start": 57,
      "end": 105
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 105
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "async",
    "start": 57,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 66,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 71,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 76,
    "end": 79
  },
  {
    "type": "Identifier",
    "value": "rest",
    "start": 79,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 87,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "bar",
    "start": 90,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "await",
    "start": 94,
    "end": 99
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 100,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 103,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 104,
    "end": 105
  }
]
```
