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
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 9,
                "end": 10
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 12,
                "end": 13
              },
              {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "abc",
                      "cooked": "abc"
                    },
                    "tail": false,
                    "start": 15,
                    "end": 21
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "def",
                      "cooked": "def"
                    },
                    "tail": true,
                    "start": 26,
                    "end": 31
                  }
                ],
                "expressions": [
                  {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 22,
                    "end": 25
                  }
                ],
                "start": 15,
                "end": 31
              }
            ],
            "start": 8,
            "end": 32
          },
          "definite": false,
          "start": 4,
          "end": 32
        }
      ],
      "declare": false,
      "start": 0,
      "end": 33
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 33
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
    "value": "[",
    "start": 8,
    "end": 9
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 9,
    "end": 10
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 10,
    "end": 11
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 12,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 13,
    "end": 14
  },
  {
    "type": "Template",
    "value": "`abc${",
    "start": 15,
    "end": 21
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 22,
    "end": 25
  },
  {
    "type": "Template",
    "value": "}def`",
    "start": 26,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 32,
    "end": 33
  }
]
```
