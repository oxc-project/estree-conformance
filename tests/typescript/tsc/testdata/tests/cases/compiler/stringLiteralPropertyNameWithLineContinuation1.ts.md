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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "text",
                  "raw": "'text\\\n'",
                  "start": 9,
                  "end": 17
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 18,
                  "end": 25
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 9,
                "end": 25
              }
            ],
            "start": 8,
            "end": 26
          },
          "definite": false,
          "start": 4,
          "end": 26
        }
      ],
      "declare": false,
      "start": 0,
      "end": 26
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 27,
            "end": 28
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "text",
            "optional": false,
            "typeAnnotation": null,
            "start": 29,
            "end": 33
          },
          "optional": false,
          "computed": false,
          "start": 27,
          "end": 33
        },
        "right": {
          "type": "Literal",
          "value": "bar",
          "raw": "\"bar\"",
          "start": 36,
          "end": 41
        },
        "start": 27,
        "end": 41
      },
      "directive": null,
      "start": 27,
      "end": 41
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 41
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
    "value": "x",
    "start": 4,
    "end": 5
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "String",
    "value": "'text\\\n'",
    "start": 9,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 17,
    "end": 18
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 27,
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
    "value": "text",
    "start": 29,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 34,
    "end": 35
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 36,
    "end": 41
  }
]
```
