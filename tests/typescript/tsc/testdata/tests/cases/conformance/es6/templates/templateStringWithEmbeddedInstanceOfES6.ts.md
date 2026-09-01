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
                "start": 41,
                "end": 46
              }
            ],
            "expressions": [
              {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "\"hello\"",
                  "start": 15,
                  "end": 22
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 34,
                  "end": 40
                },
                "start": 15,
                "end": 40
              }
            ],
            "start": 8,
            "end": 46
          },
          "definite": false,
          "start": 4,
          "end": 46
        }
      ],
      "declare": false,
      "start": 0,
      "end": 47
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 47
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
    "type": "String",
    "value": "\"hello\"",
    "start": 15,
    "end": 22
  },
  {
    "type": "Keyword",
    "value": "instanceof",
    "start": 23,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 34,
    "end": 40
  },
  {
    "type": "Template",
    "value": "}def`",
    "start": 41,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 46,
    "end": 47
  }
]
```
