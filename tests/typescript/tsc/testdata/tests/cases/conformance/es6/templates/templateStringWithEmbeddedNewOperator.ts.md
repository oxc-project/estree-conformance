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
                "start": 32,
                "end": 37
              }
            ],
            "expressions": [
              {
                "type": "NewExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "String",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 19,
                  "end": 25
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Literal",
                    "value": "Hi",
                    "raw": "\"Hi\"",
                    "start": 26,
                    "end": 30
                  }
                ],
                "start": 15,
                "end": 31
              }
            ],
            "start": 8,
            "end": 37
          },
          "definite": false,
          "start": 4,
          "end": 37
        }
      ],
      "declare": false,
      "start": 0,
      "end": 38
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 38
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
    "type": "Keyword",
    "value": "new",
    "start": 15,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "String",
    "start": 19,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 25,
    "end": 26
  },
  {
    "type": "String",
    "value": "\"Hi\"",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 30,
    "end": 31
  },
  {
    "type": "Template",
    "value": "}def`",
    "start": 32,
    "end": 37
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 37,
    "end": 38
  }
]
```
