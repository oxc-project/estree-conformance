__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TaggedTemplateExpression",
        "tag": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "I AM THE ",
                "cooked": "I AM THE "
              },
              "tail": false,
              "start": 0,
              "end": 12
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": " PORTION",
                "cooked": " PORTION"
              },
              "tail": true,
              "start": 27,
              "end": 37
            }
          ],
          "expressions": [
            {
              "type": "TemplateLiteral",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 13,
                  "end": 16
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": " ",
                    "cooked": " "
                  },
                  "tail": true,
                  "start": 23,
                  "end": 26
                }
              ],
              "expressions": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "TAG",
                        "cooked": "TAG"
                      },
                      "tail": true,
                      "start": 17,
                      "end": 22
                    }
                  ],
                  "expressions": [],
                  "start": 17,
                  "end": 22
                }
              ],
              "start": 13,
              "end": 26
            }
          ],
          "start": 0,
          "end": 37
        },
        "typeArguments": null,
        "quasi": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "I ",
                "cooked": "I "
              },
              "tail": false,
              "start": 41,
              "end": 46
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": " THE TEMPLATE PORTION",
                "cooked": " THE TEMPLATE PORTION"
              },
              "tail": true,
              "start": 52,
              "end": 75
            }
          ],
          "expressions": [
            {
              "type": "Literal",
              "value": "AM",
              "raw": "\"AM\"",
              "start": 47,
              "end": 51
            }
          ],
          "start": 41,
          "end": 75
        },
        "start": 0,
        "end": 75
      },
      "directive": null,
      "start": 0,
      "end": 75
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 75
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Template",
    "value": "`I AM THE ${",
    "start": 0,
    "end": 12
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 13,
    "end": 16
  },
  {
    "type": "Template",
    "value": "`TAG`",
    "start": 17,
    "end": 22
  },
  {
    "type": "Template",
    "value": "} `",
    "start": 23,
    "end": 26
  },
  {
    "type": "Template",
    "value": "} PORTION`",
    "start": 27,
    "end": 37
  },
  {
    "type": "Template",
    "value": "`I ${",
    "start": 41,
    "end": 46
  },
  {
    "type": "String",
    "value": "\"AM\"",
    "start": 47,
    "end": 51
  },
  {
    "type": "Template",
    "value": "} THE TEMPLATE PORTION`",
    "start": 52,
    "end": 75
  }
]
```
