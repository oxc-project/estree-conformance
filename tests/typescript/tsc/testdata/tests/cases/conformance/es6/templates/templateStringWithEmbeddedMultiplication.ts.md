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
            "type": "TemplateLiteral",
            "quasis": [
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "abc",
                  "cooked": "abc"
                },
                "tail": false,
                "start": 8,
                "end": 14
              },
              {
                "type": "TemplateElement",
                "value": {
                  "raw": "def",
                  "cooked": "def"
                },
                "tail": true,
                "start": 21,
                "end": 26
              }
            ],
            "expressions": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 7,
                  "raw": "7",
                  "start": 15,
                  "end": 16
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 6,
                  "raw": "6",
                  "start": 19,
                  "end": 20
                },
                "start": 15,
                "end": 20
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
      "end": 27
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 27
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
    "type": "Template",
    "value": "`abc${",
    "start": 8,
    "end": 14
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 17,
    "end": 18
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 19,
    "end": 20
  },
  {
    "type": "Template",
    "value": "}def`",
    "start": 21,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 26,
    "end": 27
  }
]
```
